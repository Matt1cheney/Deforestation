const aws = require('aws-sdk')
const multer = require("multer");
const multerS3 = require('multer-s3')
const path = require("path");
const fs = require("fs");
const URL = require('url');

async function removeBlob(uri) {
    if (!isMulterS3Enabled()) {
        fs.unlinkSync(uri)
        return
    }

    const { bucketName } = getDefaultOptionsFromEnvironment();

    const s3 = createS3Client();
    const parsedURI = URL.parse(uri);

    const s3ObjectKey = parsedURI.pathname.substring(1); // Removes leading slash

    console.log("Remove blob from S3: ", {bucketName: bucketName, s3ObjectKey: s3ObjectKey});
    const result = await s3.deleteObject({
        Bucket: bucketName,
        Key: s3ObjectKey,
    }).promise();

    console.log({result});
}

function isMulterS3Enabled() {
    const envValue = process.env.MULTERS3_ENABLED;
    return envValue && envValue !== 'false';
}
function getDefaultOptionsFromEnvironment() {
    return {
        prefix: process.env.MULTERS3_PREFIX,
        bucketName: process.env.MULTERS3_BUCKET_NAME,
        awsRegion: process.env.MULTERS3_AWS_REGION,
        awsAccessKeyId: process.env.MULTERS3_AWS_ACCESS_KEY_ID,
        awsSecretAccessKey: process.env.MULTERS3_AWS_SECRET_ACCESS_KEY,

        acl: 'public-read',
    };
}
function createMulterS3Storage() {
    return createMulterS3StorageWithOptions(getDefaultOptionsFromEnvironment());
}

function createS3Client() {
    return createS3ClientWithOptions(getDefaultOptionsFromEnvironment());
}

function createS3ClientWithOptions({ bucketName, awsRegion, awsAccessKeyId, awsSecretAccessKey }) {
    aws.config.update({
        region: awsRegion,
        credentials: new aws.Credentials({
            accessKeyId: awsAccessKeyId,
            secretAccessKey: awsSecretAccessKey,
        })
    });

    const s3 = new aws.S3({
        apiVersion: "2006-03-01",
        params: {Bucket: bucketName}
    });
    return s3;
}
function createMulterS3StorageWithOptions({ prefix, acl, bucketName, awsRegion, awsAccessKeyId, awsSecretAccessKey }) {
    const s3 = createS3ClientWithOptions({ bucketName, awsRegion, awsAccessKeyId, awsSecretAccessKey });

    const prefixString = prefix || "";
    const delimiter = "-";

    const storage = multerS3({
        s3: s3,
        bucket: bucketName,
        acl: acl,
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, (!prefixString ? "" : prefixString + delimiter)
                        + file.fieldname
                        + delimiter
                        + Date.now().toString()
                        + path.extname(file.originalname));
        }
    });

    return storage;
};

function createMulterLocalStorage() {
    //set storage engine with respect to server.js
    const diskStorage = multer.diskStorage({
        //Location where your uploaded files will reside relative to server.js file
        destination: "./client/upload",
        //Filename is the name of the file after uploaded Date.now() will generate unique timestamp
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
        }
    });

    return diskStorage;
}

function createMulterStorage() {
    if (isMulterS3Enabled()) {
        return createMulterS3Storage();
    }

    return createMulterLocalStorage();
}

module.exports = {
    createMulterS3Storage,
    createMulterS3StorageWithOptions,
    isMulterS3Enabled,
    removeBlob,
    createMulterLocalStorage,
    createMulterStorage,
};
