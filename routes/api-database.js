const router = require("express").Router()
const mongoose = require("mongoose")
const PersonModel = require("../model/nosql/Person")
const RegionModel = require("../model/nosql/Region")
const SiteModel = require("../model/nosql/Site")
const SourceModel = require("../model/nosql/Source")
const EventModel = require("../model/nosql/Event")

//--------------------------- Person Controller -------------------------

async function createPerson(req, res) {
    console.log(req.body)
    let newPerson = new PersonModel(req.body);
    let savedPerson = await newPerson.save();
    res.json(savedPerson);
}

async function getAllPerson(req, res) {    
    const id = req.params.id;

    try {
        const data = await PersonModel.find();
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
        const data = await PersonModel.findOne({ _id:id })
        if (!data) 
            res.status(404).json({ message: `Cannot FIND Person with _id=${id}. Maybe Person was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error finding Person with _id=" + id });
    }
}

async function deletePerson(req, res) {
    if (!req.params.id) 
        return res.status(400).json({ message: "Person to delete can not be empty!" });
    
    const id = req.params.id;

    try {
        const data = await PersonModel.findOneAndDelete({ _id:id })
        if (!data) 
            res.status(404).json({ message: `Cannot DELETE Person with _id=${id}. Maybe Person was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Person with _id=" + id });
    }
}

async function updatePerson(req, res) {
    if (!req.body) 
        return res.status(400).json({ message: "Person to update can not be empty!" });
    
    
    const id = req.params.id;

    try {
        const data = await PersonModel.findOneAndUpdate({ _id:id }, req.body, { useFindAndModify: false })
        if (!data) 
            res.status(404).json({ message: `Cannot update Person with _id=${id}. Maybe Person was not found!` });       
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Person with _id=" + id });
    }
}

//------------------------------ Region COntroller ------------------------

async function createRegion(req, res) {
    console.log(req.body)
    let newRegion = new RegionModel(req.body);
    let savedRegion = await newRegion.save();
    res.json(savedRegion);
}

async function getAllRegion(req, res) {    
    const id = req.params.id;

    try {
        const data = await RegionModel.find();
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
        const data = await RegionModel.findOne({ _id:id })
        if (!data) 
            res.status(404).json({ message: `Cannot FIND Region with _id=${id}. Maybe Region was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error finding Region with _id=" + id });
    }
}

async function deleteRegion(req, res) {
    if (!req.params.id) 
        return res.status(400).json({ message: "Region to delete can not be empty!" });
    
    const id = req.params.id;

    try {
        const data = await RegionModel.findOneAndDelete({ _id:id })
        if (!data) 
            res.status(404).json({ message: `Cannot DELETE Region with _id=${id}. Maybe Region was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Region with _id=" + id });
    }
}

async function updateRegion(req, res) {
    if (!req.body) 
        return res.status(400).json({ message: "Region to update can not be empty!" });
    
    
    const id = req.params.id;

    try {
        const data = await RegionModel.findOneAndUpdate({ _id:id }, req.body, { useFindAndModify: false })
        if (!data) 
            res.status(404).json({ message: `Cannot update Region with _id=${id}. Maybe Region was not found!` });       
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Region with _id=" + id });
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
        const data = await SiteModel.find();
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
        const data = await SiteModel.findOne({ _id:id })
        if (!data) 
            res.status(404).json({ message: `Cannot FIND Site with _id=${id}. Maybe Site was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error finding Site with _id=" + id });
    }
}

async function deleteSite(req, res) {
    if (!req.params.id) 
        return res.status(400).json({ message: "Site to delete can not be empty!" });
    
    const id = req.params.id;

    try {
        const data = await SiteModel.findOneAndDelete({ _id:id })
        if (!data) 
            res.status(404).json({ message: `Cannot DELETE Site with _id=${id}. Maybe Site was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Site with _id=" + id });
    }
}

async function updateSite(req, res) {
    if (!req.body) 
        return res.status(400).json({ message: "Site to update can not be empty!" });
    
    
    const id = req.params.id;

    try {
        const data = await SiteModel.findOneAndUpdate({ _id:id }, req.body, { useFindAndModify: false })
        if (!data) 
            res.status(404).json({ message: `Cannot update Site with _id=${id}. Maybe Site was not found!` });       
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Site with _id=" + id });
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
        const data = await SourceModel.find();
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
        const data = await SourceModel.findOne({ _id:id })
        if (!data) 
            res.status(404).json({ message: `Cannot FIND Source with _id=${id}. Maybe Source was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error finding Source with _id=" + id });
    }
}

async function deleteSource(req, res) {
    if (!req.params.id) 
        return res.status(400).json({ message: "Source to delete can not be empty!" });
    
    const id = req.params.id;

    try {
        const data = await SourceModel.findOneAndDelete({ _id:id })
        if (!data) 
            res.status(404).json({ message: `Cannot DELETE Source with _id=${id}. Maybe Source was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Source with _id=" + id });
    }
}

async function updateSource(req, res) {
    if (!req.body) 
        return res.status(400).json({ message: "Source to update can not be empty!" });
    
    
    const id = req.params.id;

    try {
        const data = await SourceModel.findOneAndUpdate({ _id:id }, req.body, { useFindAndModify: false })
        if (!data) 
            res.status(404).json({ message: `Cannot update Source with _id=${id}. Maybe Source was not found!` });       
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Source with _id=" + id });
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
        const data = await EventModel.find();
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
        const data = await EventModel.findOne({ _id:id })
        if (!data) 
            res.status(404).json({ message: `Cannot FIND Event with _id=${id}. Maybe Event was not found!` });
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error finding Event with _id=" + id });
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
            res.status(404).json({ message: `Cannot update Event with _id=${id}. Maybe Event was not found!` });       
        else res.json(data);
    } catch(err) {
        res.status(500).json({ message: "Error updating Event with _id=" + id });
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
router.put("/api/region/:id", updateRegion);
router.delete("/api/region/:id", deleteRegion);

//----------------------- Event routes -------------------

router.get("/api/events", getAllEvent);
router.post("/api/events", createEvent);
router.get("/api/event/:id", findEvent);
router.put("/api/event/:id", updateEvent);
router.delete("/api/event/:id", deleteEvent);

// Export router

module.exports = router;