const router = require("express").Router()
const sendMail = require("./api-mail")
const PersonModel = require("../model/Person")
const RegionModel = require("../model/Region")
const SiteModel = require("../model/Site")
const SourceModel = require("../model/Source")
const EventModel = require("../model/Event")

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
    } catch(err) {
        res.status(500).json({ message: "Error updating Person with name=" + id });
    }
}

async function findPerson(req, res) {
    if (!req.params.id) 
        return res.status(400).json({ message: "Person to find can not be empty!" });
    
    const id = req.params.id;

    try {
        const data = await PersonModel.findOne({ firebaseUid:id }).populate("region", "name")
        if (!data) 
            res.status(404).json({ message: `Cannot FIND Person with name=${id}. Maybe Person was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error finding Person with name=" + id });
    }
}

async function deletePerson(req, res) {
    if (!req.params.id) 
        return res.status(400).json({ message: "Person to delete can not be empty!" });
    
    const id = req.params.id;

    try {
        const data = await PersonModel.findOneAndDelete({ name:id })
        if (!data) 
            res.status(404).json({ message: `Cannot DELETE Person with name=${id}. Maybe Person was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Person with name=" + id });
    }
}

async function updatePerson(req, res) {
    if (!req.body) 
        return res.status(400).json({ message: "Person to update can not be empty!" });
    
    
    const id = req.params.id;

    try {
        const data = await PersonModel.findOneAndUpdate({ _id:id }, req.body, { useFindAndModify: false })
        if (!data) 
            res.status(404).json({ message: `Cannot update Person with name=${id}. Maybe Person was not found!` });       
        else res.json(data);
    } catch(err) {
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
    } catch(err) {
        res.status(500).json({ message: "Error updating Region with name=" + id });
    }
}

async function findRegion(req, res) {
    if (!req.params.id) 
        return res.status(400).json({ message: "Region to find can not be empty!" });
    
    const id = req.params.id;

    try {
        const data = await RegionModel.findOne({ name:id }).populate("coordinator", "name")
        if (!data) 
            res.status(404).json({ message: `Cannot FIND Region with name=${id}. Maybe Region was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error finding Region with name=" + id });
    }
}

async function deleteRegion(req, res) {
    if (!req.params.id) 
        return res.status(400).json({ message: "Region to delete can not be empty!" });
    
    const id = req.params.id;

    try {
        const data = await RegionModel.findOneAndDelete({ name:id })
        console.log(data)
        if (!data) 
            res.status(404).json({ message: `Cannot DELETE Region with name=${id}. Maybe Region was not found!` });
        else res.status(200).json({ message: `Region with name=${id} is DELETED!` });
    } catch(err) {
        res.status(500).json({ message: "Error updating Region with name=" + id });
    }
}

async function updateRegion(req, res) {
    if (!req.body) 
        return res.status(400).json({ message: "Region to update can not be empty!" });
    
    const id = req.body._id;

    try {
        const data = await RegionModel.findOneAndUpdate({ _id:id }, req.body, { useFindAndModify: false })
        if (!data) 
            res.status(404).json({ message: `Cannot update Region with name=${id}. Maybe Region was not found!` });       
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Region with name=" + id });
    }
}

//-------------------------------- Site Controller ------------------------------

async function createSite(req, res) {
    console.log(req.body)
    let newSite = new SiteModel(req.body);
    let savedSite = await newSite.save();
    res.json(savedSite);
}

async function getAllSite(req, res) {    
    const id = req.params.id;

    try {
        const data = await SiteModel.find().populate("region", "name").populate("coordinator", "name").populate("owner", "name");
        if (!data) 
            res.status(404).json({ message: `Cannot FIND Site with name=${id}. Maybe Site was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Site with name=" + id });
    }
}

async function findSite(req, res) {
    if (!req.params.id) 
        return res.status(400).json({ message: "Site to find can not be empty!" });
    
    const id = req.params.id;

    try {
        const data = await SiteModel.findOne({ name:id }).populate("region", "name").populate("coordinator", "name");
        if (!data) 
            res.status(404).json({ message: `Cannot FIND Site with name=${id}. Maybe Site was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error finding Site with name=" + id });
    }
}

async function deleteSite(req, res) {
    if (!req.params.id) 
        return res.status(400).json({ message: "Site to delete can not be empty!" });
    
    const id = req.params.id;

    try {
        const data = await SiteModel.findOneAndDelete({ name:id })
        if (!data) 
            res.status(404).json({ message: `Cannot DELETE Site with name=${id}. Maybe Site was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Site with name=" + id });
    }
}

async function updateSite(req, res) {
    if (!req.body) 
        return res.status(400).json({ message: "Site to update can not be empty!" });
    const id = req.params.id;

    try {
        const data = await SiteModel.findOneAndUpdate({ _id:id }, req.body, { useFindAndModify: false })
        if (!data) 
            res.status(404).json({ message: `Cannot update Site with name=${id}. Maybe Site was not found!` });       
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Site with name=" + id });
    }
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
        const data = await SourceModel.find().populate("region", "name").populate("intendSite", "name");
        if (!data) 
            res.status(404).json({ message: `Cannot FIND Source with name=${id}. Maybe Source was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Source with name=" + id });
    }
}

async function findSource(req, res) {
    if (!req.params.id) 
        return res.status(400).json({ message: "Source to find can not be empty!" });
    
    const id = req.params.id;

    try {
        const data = await SourceModel.findOne({ name:id }).populate("region", "name").populate("intendSite", "name");
        if (!data) 
            res.status(404).json({ message: `Cannot FIND Source with name=${id}. Maybe Source was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error finding Source with name=" + id });
    }
}

async function deleteSource(req, res) {
    if (!req.params.id) 
        return res.status(400).json({ message: "Source to delete can not be empty!" });
    
    const id = req.params.id;

    try {
        const data = await SourceModel.findOneAndDelete({ name:id })
        if (!data) 
            res.status(404).json({ message: `Cannot DELETE Source with name=${id}. Maybe Source was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Source with name=" + id });
    }
}

async function updateSource(req, res) {
    if (!req.body) 
        return res.status(400).json({ message: "Source to update can not be empty!" });
    
    
    const id = req.params.id;

    try {
        const data = await SourceModel.findOneAndUpdate({ _id:id }, req.body, { useFindAndModify: false })
        if (!data) 
            res.status(404).json({ message: `Cannot update Source with name=${id}. Maybe Source was not found!` });       
        else res.json(data);
    } catch(err) {
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

async function getAllEvent(req, res) {    
    const id = req.params.id;

    try {
        const data = await EventModel.find().populate("site", "name").populate("coordinator", "name").populate("volunteers");
        if (!data) 
            res.status(404).json({ message: `Cannot FIND Event with name=${id}. Maybe Event was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Event with name=" + id });
    }
}

async function findEvent(req, res) {
    if (!req.params.id) 
        return res.status(400).json({ message: "Event to find can not be empty!" });
    
    const id = req.params.id;

    try {
        const data = await EventModel.findOne({ name:id }).populate("site", "name").populate("volunteer", "name");
        if (!data) 
            res.status(404).json({ message: `Cannot FIND Event with name=${id}. Maybe Event was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error finding Event with name=" + id });
    }
}

async function deleteEvent(req, res) {
    if (!req.params.id) 
        return res.status(400).json({ message: "Event to delete can not be empty!" });
    
    const id = req.params.id;

    try {
        const data = await EventModel.findOneAndDelete({ _id:id })
        if (!data) 
            res.status(404).json({ message: `Cannot DELETE Event with _id=${id}. Maybe Event was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Event with _id=" + id });
    }
}

async function updateEvent(req, res) {
    if (!req.body) 
        return res.status(400).json({ message: "Event to update can not be empty!" });
    
    
    const id = req.params.id;

    try {
        const data = await EventModel.findOneAndUpdate({ _id:id }, req.body, { useFindAndModify: false })
        if (!data) 
            res.status(404).json({ message: `Cannot update Event with name=${id}. Maybe Event was not found!` });       
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Event with name=" + id });
    }
}


//--------------------------------- API Routes ----------------------------------

//----------------------- Person routes -------------------

router.get("/api/persons", getAllPerson);
router.post("/api/persons", createPerson);
router.get("/api/person/:id", findPerson);
router.put("/api/person/:id", updatePerson);
router.delete("/api/person/:id", deletePerson);

//----------------------- Site routes -------------------

router.get("/api/sites", getAllSite);
router.post("/api/sites", createSite);
router.get("/api/site/:id", findSite);
router.put("/api/site/:id", updateSite);
router.delete("/api/site/:id", deleteSite);

//----------------------- Source routes -------------------

router.get("/api/sources", getAllSource);
router.post("/api/sources", createSource);
router.get("/api/source/:id", findSource);
router.put("/api/source/:id", updateSource);
router.delete("/api/source/:id", deleteSource);

//----------------------- Region routes -------------------

router.get("/api/regions", getAllRegion);
router.post("/api/regions", createRegion);
router.get("/api/region/:id", findRegion);
router.put("/api/region", updateRegion);
router.delete("/api/region/:id", deleteRegion);

//----------------------- Event routes -------------------

router.get("/api/events", getAllEvent);
router.post("/api/events", createEvent);
router.get("/api/event/:id", findEvent);
router.put("/api/event/:id", updateEvent);
router.delete("/api/event/:id", deleteEvent);

//----------------------- Additional (Non Database) Routes -----------------------

router.post("/api/addVolunteer", (req, res) => {

})

// Export router
module.exports = router;