const router = require("express").Router()
const sendMail = require("./api-mail")
const PersonModel = require("../model/Person")
const RegionModel = require("../model/Region")
const SiteModel = require("../model/Site")
const SourceModel = require("../model/Source")
const EventModel = require("../model/Event")
const multer = require("multer");
const path = require("path");
const fs = require('fs');
const mongoose = require('mongoose');

//--------------------------- Person Controller -------------------------

async function createPerson(req, res) {
    // console.log(req.body)
    let newPerson = new PersonModel(req.body);
    let savedPerson = await newPerson.save();

    if (savedPerson.role == "Volunteer")
        await sendMail(savedPerson.email, savedPerson.notes)

    res.json(savedPerson);
}

async function getAllPerson(req, res) {
    const id = req.params.id;

    try {
        const data = await PersonModel.find().populate();
        if (!data)
            res.status(404).json({ message: `Cannot FIND Person with name=${id}. Maybe Person was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error updating Person with name=" + id });
    }
}

async function findPerson(req, res) {
    if (!req.params.id)
        return res.status(400).json({ message: "Person to find can not be empty!" });

    const id = req.params.id;

    try {
        const data = await PersonModel.findOne({ "_id": id }).populate("region", "name")
        if (!data)
            res.status(404).json({ message: `Cannot FIND Person with name=${id}. Maybe Person was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error finding Person with name=" + id });
    }
}

async function findFirebasePerson(req, res) {
    if (!req.params.uid) {
        return res.status(400).json({ message: "Person to find can not be empty!" });
    }
    const id = req.params.uid;

    try {
        const data = await PersonModel.findOne({ firebaseUid: id }).populate("region", "name")
        if (!data)
            res.status(404).json({ message: `Looks like this user is not linked to our servers...` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error finding Person with name=" + uid });
    }
}

async function deletePerson(req, res) {
    if (!req.params.id)
        return res.status(400).json({ message: "Person to delete can not be empty!" });

    const id = req.params.id;

    try {
        const data = await PersonModel.findOneAndDelete({ _id: id })
        if (!data)
            res.status(404).json({ message: `Cannot DELETE Person with name=${id}. Maybe Person was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error updating Person with name=" + id });
    }
}

async function updatePerson(req, res) {
    if (!req.body)
        return res.status(400).json({ message: "Person to update can not be empty!" });


    const id = req.params.id;

    try {
        const data = await PersonModel.findOneAndUpdate({ _id: id }, req.body, { useFindAndModify: false })
        if (!data)
            res.status(404).json({ message: `Cannot update Person with name=${id}. Maybe Person was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error updating Person with name=" + id });
    }
}

//------------------------------ Region COntroller ------------------------

async function createRegion(req, res) {
    console.log("Region", req.body)
    const { name, description, coordinator } = req.body;
    const newRegion = new RegionModel({ name, description, coordinator });
    const savedRegion = await newRegion.save();
    console.log("Saved!!!");
    res.json(savedRegion);
}

async function getAllRegion(req, res) {
    const id = req.params.id;

    try {
        const data = await RegionModel.find().populate("coordinator", "name");
        console.log(data)
        if (!data)
            res.status(404).json({ message: `Cannot FIND Region with name=${id}. Maybe Region was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error updating Region with name=" + id });
    }
}

async function findRegion(req, res) {
    if (!req.params.id)
        return res.status(400).json({ message: "Region to find can not be empty!" });

    const id = req.params.id;

    try {
        const data = await RegionModel.findOne({ name: id }).populate("coordinator", "name")
        if (!data)
            res.status(404).json({ message: `Cannot FIND Region with name=${id}. Maybe Region was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error finding Region with name=" + id });
    }
}

async function deleteRegion(req, res) {
    if (!req.params.id)
        return res.status(400).json({ message: "Region to delete can not be empty!" });

    const id = req.params.id;

    try {
        const data = await RegionModel.findOneAndDelete({ _id: id })
        console.log(data)
        if (!data)
            res.status(404).json({ message: `Cannot DELETE Region with name=${id}. Maybe Region was not found!` });
        else res.status(200).json({ message: `Region with name=${id} is DELETED!` });
    } catch (err) {
        res.status(500).json({ message: "Error updating Region with name=" + id });
    }
}

async function updateRegion(req, res) {
    if (!req.body)
        return res.status(400).json({ message: "Region to update can not be empty!" });

    const id = req.body._id;

    try {
        const data = await RegionModel.findOneAndUpdate({ _id: id }, req.body, { useFindAndModify: false })
        if (!data)
            res.status(404).json({ message: `Cannot update Region with name=${id}. Maybe Region was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error updating Region with name=" + id });
    }
}

//-------------------------------- Site Controller ------------------------------

//set storage engine with respect to server.js
const storage = multer.diskStorage({
    //Location where your uploaded files will reside relative to server.js file
    destination: "./client/upload",
    //Filename is the name of the file after uploaded Date.now() will generate unique timestamp
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});


//Init Upload Multer
const upload = multer({
    //Using storage location same as storage: storage
    storage,
    //Set the limit for file size in bytes
    limits: { fileSize: 3000000 },

}).fields([{
    name: "profileImage",
    maxCount: 1 //max count will set the number of files you can upload
}, {
    name: "contract",
    maxCount: 1
}, {
    name: "document",
    maxCount: 1
}, {
    name: "additionalImages",
    maxCount: 5 //max number of files that can be uploaded is 5
}]);

//whenever post request is made to "/api/sites" end point from front end
function createSite(req, res) {
    upload(req, res, (err) => {
        if (err) {
            //log any error that occured during uploading files
            console.log(err);
            return;
        } else {
            //creatng new document from SiteModel

            let siteData = JSON.parse(req.body.siteData)

            let i = 0, addImages = [];

            // extracting additional images
            // don't use req.files["additionalImages"].path as it is creating slash problems while getting the file name
            while (req.files["additionalImages"] != undefined && req.files["additionalImages"][i] != undefined) {
                addImages.push('client/upload/' + req.files["additionalImages"][i].filename);
                i++;
            }


            let newSite = new SiteModel({
                //Please set the enctype in front end to <form action="" method="" enctype="multipart/form-data">
                //Please refer https://www.npmjs.com/package/multer for additional information

                //req.body.name get from data from input field with <input type="text" name="name">
                name: siteData.name,

                region: siteData.region,
                owner: siteData.owner,
                coordinator: siteData.coordinator,

                //req.body.address get from data from input field with <input type="text" name="address">
                address: siteData.address,
                //req.body.latitude get from data from input field with <input type="text/number" name="latitude">
                latitude: siteData.latitude,
                //req.body.longitude get from data from input field with <input type="text/number" name="longitude">
                longitude: siteData.longitude,
                //req.body.status get from data from input field with <input type="text" name="status">
                status: siteData.status,
                //req.body.notes get from data from input field with <input type="text" name="notes">
                notes: siteData.notes,
                /*
                    <input type="file" id="" name="profileImage">
                    req.files is the object that return information regarding uploaded files in key value pair
                    .path is the property of req.files object under profileImage key
                    Storing image and document in the database is not recommended option so we are storing path
                    ------storing files in separate folder and path in database to acces them using file system module----
                */

                /*
                    <input type="file" id="" name="contract">
                */
                //<input type="file" id="" name="document">

                plantingTarget: siteData.plantingTarget,
                profileImage: 'client/upload/' + req.files["profileImage"][0].filename,
                document: req.files["document"] ? 'client/upload/' + req.files["document"][0].filename : '',
                contract: 'client/upload/' + req.files["contract"][0].filename,
                additionalImages: addImages
            });

            /*
                Since additional image store multiple image make sure to set your field
                <input type="file" name="additionalImages" multiple> !important
                logic to store multiple path in additionalImages
            */

            //Saving document to the database
            newSite.save((err, docs) => {
                if (err || !docs) {
                    //If any error occur
                    console.log(err);
                    return res.status(400).json({
                        err: "Not able to save user in DB",
                    });

                }
                //once document is successfully stored in database json response is sent to the client as a feedback
                res.json(newSite);
            });
        }
    });
}


async function getAllSite(req, res) {
    const id = req.params.id;

    try {
        const data = await SiteModel.find().populate("region", "name").populate("coordinator", "name").populate("owner", "name");
        if (!data)
            res.status(404).json({ message: `Cannot FIND Site with name=${id}. Maybe Site was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error updating Site with name=" + id });
    }
}

async function findSite(req, res) {
    if (!req.params.id)
        return res.status(400).json({ message: "Site to find can not be empty!" });

    const id = req.params.id;

    try {
        const data = await SiteModel.findOne({ name: id }).populate("region", "name").populate("coordinator", "name");
        if (!data)
            res.status(404).json({ message: `Cannot FIND Site with name=${id}. Maybe Site was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error finding Site with name=" + id });
    }
}

async function deleteSite(req, res) {
    if (!req.params.id)
        return res.status(400).json({ message: "Site to delete can not be empty!" });

    const id = req.params.id;

    try {
        const data = await SiteModel.findOneAndDelete({ _id: id })
        if (!data)
            res.status(404).json({ message: `Cannot DELETE Site with name=${id}. Maybe Site was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error updating Site with name=" + id });
    }
}

function updateSite(req, res) {
    upload(req, res, async (err) => {
        if (err) {
            //log any error that occured during uploading files
            console.log(err);
            return;
        } else {
            //creatng new document from SiteModel
            

            let siteData = JSON.parse(req.body.siteData)
            const id = siteData._id;
            let i = 0, addImages = [];

            // extracting additional images
            // don't use req.files["additionalImages"].path as it is creating slash problems while getting the file name
            while (req.files["additionalImages"] != undefined && req.files["additionalImages"][i] != undefined) {
                addImages.push('client/upload/' + req.files["additionalImages"][i].filename);
                i++;
            }

            

            let newSite = new SiteModel({
                //Please set the enctype in front end to <form action="" method="" enctype="multipart/form-data">
                //Please refer https://www.npmjs.com/package/multer for additional information

                //req.body.name get from data from input field with <input type="text" name="name">
                _id:id,
                name: siteData.name,

                region: siteData.region,
                owner: siteData.owner,
                coordinator: siteData.coordinator,

                //req.body.address get from data from input field with <input type="text" name="address">
                address: siteData.address,
                //req.body.latitude get from data from input field with <input type="text/number" name="latitude">
                latitude: siteData.latitude,
                //req.body.longitude get from data from input field with <input type="text/number" name="longitude">
                longitude: siteData.longitude,
                //req.body.status get from data from input field with <input type="text" name="status">
                status: siteData.status,
                notes: siteData.notes,
                plantingTarget: siteData.plantingTarget,
                profileImage: req.files["profileImage"] ? 'client/upload/' + req.files["profileImage"][0].filename : siteData.profileImage,
                document: req.files["document"] ? 'client/upload/' + req.files["document"][0].filename : siteData.document,
                contract: req.files["contract"] ? 'client/upload/' + req.files["contract"][0].filename : siteData.contract,
                additionalImages: addImages.length ? addImages : siteData.additionalImages
            });

            try {
                console.log(id);
                const data = await SiteModel.findOneAndUpdate({ _id: mongoose.Types.ObjectId(id) }, {$set:newSite}, { useFindAndModify: false })
                console.log(data);
                if (!data)
                    res.status(404).json({ message: `Cannot update Site with name=${id}. Maybe Site was not found!` });
                else res.json(data);
            } catch (err) {
                res.status(500).json({ message: "Error updating Site with name=" + id });
            }
        }
    });

}

//--------------------------------- Source Controller ------------------------------

async function createSource(req, res) {
    console.log(req.body)
    let newSource = new SourceModel(req.body);
    let savedSource = await newSource.save();
    res.json(savedSource);
}

async function getAllSource(req, res) {
    const id = req.params.id;

    try {
        const data = await SourceModel.find().populate("region", "name").populate("coordinator", "name").populate("owner", "name").populate("seedlings.intendSite", "name");
        if (!data)
            res.status(404).json({ message: `Cannot FIND Source with name=${id}. Maybe Source was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error updating Source with name=" + id });
    }
}

async function findSource(req, res) {
    if (!req.params.id)
        return res.status(400).json({ message: "Source to find can not be empty!" });

    const id = req.params.id;

    try {
        const data = await SourceModel.findOne({ name: id }).populate("region", "name").populate("intendSite", "name");
        if (!data)
            res.status(404).json({ message: `Cannot FIND Source with name=${id}. Maybe Source was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error finding Source with name=" + id });
    }
}

async function deleteSource(req, res) {
    if (!req.params.id)
        return res.status(400).json({ message: "Source to delete can not be empty!" });

    const id = req.params.id;

    try {
        const data = await SourceModel.findOneAndDelete({ _id: id })
        if (!data)
            res.status(404).json({ message: `Cannot DELETE Source with name=${id}. Maybe Source was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error updating Source with name=" + id });
    }
}

async function updateSource(req, res) {
    if (!req.body)
        return res.status(400).json({ message: "Source to update can not be empty!" });


    const id = req.body._id;

    try {
        const data = await SourceModel.findOneAndUpdate({ _id: id }, req.body, { useFindAndModify: false })
        if (!data)
            res.status(404).json({ message: `Cannot update Source with name=${id}. Maybe Source was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error updating Source with name=" + id });
    }
}

//----------------------------------- Event Controller -------------------------------

async function createEvent(req, res) {
    console.log(req.body)
    let newEvent = new EventModel(req.body);
    let savedEvent = await newEvent.save();
    res.json(savedEvent);
}

async function getAllEvents(req, res) {
    const id = req.params.id;

    try {
        const data = await EventModel.find().populate("site", "name").populate("coordinator", "name").populate("volunteers");
        if (!data)
            res.status(404).json({ message: `Cannot FIND Event with name=${id}. Maybe Event was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error updating Event with name=" + id });
    }
}

async function findEvent(req, res) {
    if (!req.params.id)
        return res.status(400).json({ message: "Event to find can not be empty!" });

    const id = req.params.id;

    try {
        const data = await EventModel.findOne({ "_id": id }).populate("site", "name").populate("volunteer", "name");
        if (!data)
            res.status(404).json({ message: `Cannot FIND Event with name=${id}. Maybe Event was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error finding Event with name=" + id });
    }
}

async function deleteEvent(req, res) {
    if (!req.params.id)
        return res.status(400).json({ message: "Event to delete can not be empty!" });

    const id = req.params.id;

    try {
        const data = await EventModel.findOneAndDelete({ _id: id })
        if (!data)
            res.status(404).json({ message: `Cannot DELETE Event with _id=${id}. Maybe Event was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error updating Event with _id=" + id });
    }
}

async function updateEvent(req, res) {
    if (!req.body)
        return res.status(400).json({ message: "Event to update can not be empty!" });

    const id = req.body._id;

    try {
        const data = await EventModel.findOneAndUpdate({ _id: id }, req.body, { useFindAndModify: false })
        if (!data)
            res.status(404).json({ message: `Cannot update Event with name=${id}. Maybe Event was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error updating Event with name=" + id });
    }
}

//---------------------------------- Search Routes ------------------------------

async function searchPerson(req, res) {
    const query = req.query.keyword;

    try {
        const data = await PersonModel.find({ $text: { $search: query } }).populate("region", "name");
        if (!data)
            res.status(404).json({ message: `Cannot FIND Person with name=. Maybe Person was not found!` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error updating Person with name=" });
    }
}

async function searchRegion(req, res) {
    const query = req.query.keyword;

    try {
        const data = await RegionModel.find({ $text: { $search: query } }).populate("coordinator", "name");
        if (!data)
            res.status(404).json({ message: `Cannot FIND Region` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error updating Region" });
    }
}

async function searchSite(req, res) {
    const query = req.query.keyword;

    try {
        const data = await SiteModel.find({ $text: { $search: query } }).populate("region", "name").populate("coordinator", "name").populate("owner", "name");
        if (!data)
            res.status(404).json({ message: `Cannot FIND Site` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error updating Site" });
    }
}

async function searchEvent(req, res) {
    const query = req.query.keyword;

    try {
        const data = await EventModel.find({ $text: { $search: query } }).populate("site", "name").populate("coordinator", "name").populate("volunteers");
        if (!data)
            res.status(404).json({ message: `Cannot FIND Event` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error updating Event" });
    }
}

async function searchSource(req, res) {
    const query = req.query.keyword;

    try {
        const data = await SourceModel.find({ $text: { $search: query } }).populate("region", "name").populate("coordinator", "name").populate("owner", "name").populate("seedlings.intendSite", "name");
        if (!data)
            res.status(404).json({ message: `Cannot FIND Source` });
        else res.json(data);
    } catch (err) {
        res.status(500).json({ message: "Error updating Source" });
    }
}
async function getFile(req, res) {
    //last indexOf to extract file extension and based on that to send writeHead
    // one can add more file extension for uploading files
    const index = req.params.name.lastIndexOf('.');
    const extension = req.params.name.substr(index)

    // res.writeHead for setting content-type of document to be sent
    if (extension === '.jpg' || extension === '.jpeg' || extension === '.png')
        res.writeHead(200, { 'content-type': 'image/' + req.params.name.substr(index + 1) });
    else if (extension === '.pdf')
        res.writeHead(200, { 'content-type': 'application/' + req.params.name.substr(index + 1) });

    // fs to read and stream file
    fs.createReadStream('./client/upload/' + req.params.name).pipe(res);
}



//--------------------------------- API Routes ----------------------------------

//----------------------- Person routes -------------------

router.get("/api/persons", getAllPerson);
router.post("/api/persons", createPerson);
router.get("/api/person/:id", findPerson);
router.get("/api/firebaseperson/:uid", findFirebasePerson);
router.get(`/api/matchperson?:keyword`, searchPerson);
router.put("/api/person/:id", updatePerson);
router.delete("/api/person/:id", deletePerson);

//----------------------- Site routes -------------------

router.get("/api/sites", getAllSite);
router.get(`/api/matchsite?:keyword`, searchSite);
router.post("/api/sites", createSite);
router.get("/api/site/:id", findSite);
router.put("/api/site", updateSite);
router.delete("/api/site/:id", deleteSite);

//----------------------- Source routes -------------------

router.get("/api/sources", getAllSource);
router.get(`/api/matchsource?:keyword`, searchSource);
router.post("/api/sources", createSource);
router.get("/api/source/:id", findSource);
router.put("/api/source", updateSource);
router.delete("/api/source/:id", deleteSource);

//----------------------- Region routes -------------------

router.get("/api/regions", getAllRegion);
router.get(`/api/matchregion?:keyword`, searchRegion);
router.post("/api/regions", createRegion);
router.get("/api/region/:id", findRegion);
router.put("/api/region", updateRegion);
router.delete("/api/region/:id", deleteRegion);

//----------------------- Event routes -------------------

router.get("/api/events", getAllEvents);
router.get(`/api/matchevent?:keyword`, searchEvent);
router.post("/api/events", createEvent);
router.get("/api/event/:id", findEvent);
router.put("/api/event", updateEvent);
router.delete("/api/event/:id", deleteEvent);

//----------------------- Additional (Non Database) Routes -----------------------

router.post("/api/addVolunteer", (req, res) => {

})

//----------------------- Get File routes -----------------------
router.get("/api/get-file/client/upload/:name", getFile);
// Export router
module.exports = router;
