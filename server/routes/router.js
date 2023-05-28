const express = require("express");
const router = express.Router();
const staff = require("../models/staff.js");
const patient = require("../models/patient.js");
const doctor = require("../models/doctor.js");
const admin = require("../models/admin.js");
const room = require("../models/room.js");
const login = require("../models/login.js");
const pay = require("../models/payment.js");
const patientappointment = require("../models/patientappointment.js");

router.post("/patientappointment", async (req, res) => {
  try{const { patientassigned, doctorassigned, daysavailable, timeavailable } = req.body;
  if (!patientassigned || !doctorassigned || !daysavailable || !timeavailable ) {
    res.status(422).json("Please! Fill all the Data");
  }
      const addstaff = new patientappointment ({
        patientassigned,
        doctorassigned,
        daysavailable,
        timeavailable,
      });
      await addstaff.save();
      res.status(201).json(addstaff);}
      catch(error){}
});

//Get staff

router.get('/getpatientappointment', async (req, res) => {
  
  try {
    const staffdata = await patientappointment.find();
    if (staffdata.length > 0) {
      res.status(200).json(staffdata);
    } else {
      res.status(204).end();
    }
  } catch (error) {

  }
});
router.delete("/patientappointment/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteroom = await patientappointment.findByIdAndDelete({ _id: id });
    res.status(201).json(deleteroom);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Assuming you have a "login" model or database table
    const data = await login.find({ username, password });
    if (data.length > 0) {
      res.status(200).json(data);
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});







//Register staff

router.post("/register", async (req, res) => {
  const { id, username, password, designation } = req.body;
  if (!id || !username || !password || !designation ) {
    res.status(422).json("Please! Fill all the Data");
  }

  try {
    const pre = await staff.findOne({ id: id });

    if (pre) {
      res.status(422).json("This user is already regisered to the System!");
    } else {
      const addstaff = new staff({
        id,
        username,
        password,
        designation,
      });
      const role='staff'
      const logins = new login({
        username,
        password,
        role
      });
      await logins.save();
      await addstaff.save();
      res.status(201).json(addstaff);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

//Get staff

router.get('/getData', async (req, res) => {
  
  try {
    const staffdata = await staff.find();
    if (staffdata.length > 0) {
      res.status(200).json(staffdata);
    } else {
      res.status(204).end();
    }
  } catch (error) {

  }
});

//Get staff Profile
router.get("/getstaff/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const staffdata = await staff.find({id: id});
    res.status(201).json(staffdata);
  } catch (error) {
    res.status(422).json(error);
  }
});

//Update staff Data

router.patch("/updatestaff/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedstaff = await staff.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(updatedstaff);
  } catch (error) {
    res.status(422).json(error);
  }
});

// Delete staff Data
router.delete("/deletestaff/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const search = await staff.find({ _id: id });
    usernamse=search[0].username
    const deletedLogin = await login.findOneAndDelete({ username: usernamse });
    const deletedstaff = await staff.findByIdAndDelete({ _id: id });
    res.status(201).json(deletedstaff);
  } catch (error) {
    res.status(422).json(error);
  }
});
//patient
router.post("/register/patient", async (req, res) => {
  const { id, username, password, patienttype,patientstatus,details } = req.body;


  try {
    const pre = await patient.findOne({ id: id });

    if (pre) {
      res.status(422).json("This user is already regisered to the System!");
    } else {
      const addpatient = new patient({
        id,
        username,
        password,
        patienttype,patientstatus,details
      });
      const role='patient'
      const logins = new login({
        username,
        password,
        role
      });
      await logins.save();
      await addpatient.save();
      res.status(201).json(addpatient);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

//Get Student

router.get('/getData/patient', async (req, res) => {
  
  try {
    const patientdata = await patient.find();
    if (patientdata.length > 0) {
      res.status(200).json(patientdata);
    } else {
      res.status(204).end();
    }
  } catch (error) {
  
  }
});

//Get patient Profile
router.get("/getpatient/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const patientdata = await patient.find({id: id});
    res.status(201).json(patientdata);
  } catch (error) {
    res.status(422).json(error);
  }
});
router.get("/getpatients/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const patientdata = await patient.find({username: id});
    res.status(201).json(patientdata);
  } catch (error) {
    res.status(422).json(error);
  }
});
router.get("/getpatientss/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const patientdata = await patient.find({username: id});
    res.status(201).json(patientdata);
  } catch (error) {
    res.status(422).json(error);
  }
});
router.get("/getpatientcount", async (req, res) => {
  try {
    const patientData = await patient.find();
    const count = patientData.length;

    res.status(201).json({ count });
  } catch (error) {
    res.status(422);
  }
});

//Update patient Data

router.patch("/updatepatient/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedpatient = await patient.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(updatedpatient);
  } catch (error) {
    res.status(422).json(error);
  }
});

// Delete patient Data
router.delete("/deletepatient/:id", async (req, res) => {
  try {
    const { id,username } = req.params;
    const search = await patient.find({ _id: id });
    usernamse=search[0].username
    const deletedLogin = await login.findOneAndDelete({ username: usernamse });
    const deletedpatient = await patient.findByIdAndDelete({ _id: id });
    res.status(201).json(deletedpatient);
  } catch (error) {
    res.status(422).json(error);
  }
});
//doctor
router.post("/register/doctor", async (req, res) => {
  const { id, username, password, roomnumber,designation,daysavailable,timeavailable } = req.body;
  if (!id || !username || !password || !designation || !roomnumber|| !daysavailable|| !timeavailable) {
    res.status(422).json("Please! Fill all the Data");
  }

  try {
    const pre = await doctor.findOne({ id: id });

    if (pre) {
      res.status(422).json("This user is already regisered to the System!");
    } else {
      const adddoctor = new doctor({
        id,
        username,
        password,
        designation,daysavailable,timeavailable,roomnumber
      });
      const role='doctor'
      const logins = new login({
        username,
        password,
        role
      });
      await logins.save();
      await adddoctor.save();
      
      res.status(201).json(adddoctor);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

//Get doctor

router.get('/getData/doctor', async (req, res) => {
  
  try {
    const doctordata = await doctor.find();
    if (doctordata.length > 0) {
      res.status(200).json(doctordata);
    } else {
      res.status(204).end();
    }
  } catch (error) {
  
  }
});
router.get("/getrooms/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const doctordata = await room.find({doctorassigned: id});
    res.status(201).json(doctordata);
  } catch (error) {
    res.status(422).json(error);
  }
});
//Get doctor Profile
router.get("/getdoctor/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const doctordata = await doctor.find({id: id});
    res.status(201).json(doctordata);
  } catch (error) {
    res.status(422).json(error);
  }
});

//Update doctor Data

router.patch("/updatedoctor/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateddoctor = await doctor.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(updateddoctor);
  } catch (error) {
    res.status(422).json(error);
  }
});

// Delete doctor Data
router.delete("/deletedoctor/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const search = await doctor.find({ _id: id });
    usernamse=search[0].username
    const deletedLogin = await login.findOneAndDelete({ username: usernamse });
    const deleteddoctor = await doctor.findByIdAndDelete({ _id: id });
    
    res.status(201).json(deleteddoctor);
  } catch (error) {
    res.status(422).json(error);
  }
});

// get admin data
router.get('/getData/admin', async (req, res) => {
  
  try {
    const admindata = await admin.find();
    if (admindata.length > 0) {
      res.status(200).json(admindata);
    } else {
      res.status(204).end();
    }
  } catch (error) {
   
  }
});


router.post("/payments", async (req, res) => {
  const { username, payment,status} = req.body;
  if (!username || !payment || !status ) {
    res.status(422).json("Please! Fill all the Data");
  }

      const addpayments= new pay({
        username,
        payment,
        status
      });
      await addpayments.save();
      res.status(201).json(addpayments);
    }
);
router.patch("/updatepayment/:id", async (req, res) => {
 
  try {
    const { id } = req.params;
    
    const updateroom = await pay.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateroom);
  } catch (error) {
    res.status(422).json(error);
  }
});
router.get("/getpayment/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const doctordata = await pay.find({username: id});
    res.status(201).json(doctordata);
  } catch (error) {
    res.status(422).json(error);
  }
});
router.get("/allpayment", async (req, res) => {
  try {
   

    const doctordata = await pay.find();
    res.status(201).json(doctordata);
  } catch (error) {
    res.status(422).json(error);
  }
});
//add room

router.post("/addroom", async (req, res) => {
  const { Roomnumber, available, patientassigned, doctorassigned,daysavailable,timeavailable } = req.body;
  if (!Roomnumber || !available || !patientassigned || !doctorassigned||!daysavailable||!timeavailable ) {
    res.status(422).json("Please! Fill all the Data");
    console.log("asd")
  }
else{
    
      const addroom = new room({
        Roomnumber, available, patientassigned, doctorassigned,daysavailable,timeavailable
      });

      await addroom.save();
      res.status(201).json(addroom);
    }
});
router.post("/makeapp", async (req, res) => {
  const { Roomnumber, available, patientassigned, doctorassigned,daysavailable,time } = req.body;
  if (!Roomnumber || !available || !patientassigned || !doctorassigned||!daysavailable||!time ) {
    res.status(422).json("Please! Fill all the Data");
    console.log("asd")
  }
else{
    
      const addroom = new room({
        Roomnumber, available, patientassigned, doctorassigned,daysavailable,time
      });

      await addroom.save();
      res.status(201).json(addroom);
    }
});


//show room

router.get('/showroom', async (req, res) => {
  
  try {
    const roomdata = await room.find();
    if (roomdata.length > 0) {
      res.status(200).json(roomdata);
    } else {
      res.status(204).end();
    }
  } catch (error) {

  }
});

//Get room 
router.get("/getroom/:id", async (req, res) => {
  try {
    const { id } = req.params;
   
    const roomdata = await room.find({Roomnumber: id});
    res.status(200).json(roomdata);
 
  } catch (error) {
    res.status(422).json(error);
  }
});
router.get("/showpatientappoint/:id", async (req, res) => {
  try {
    const { id } = req.params;
   
    const roomdata = await room.find({patientassigned: id});
    res.status(200).json(roomdata);
 
  } catch (error) {
    res.status(422).json(error);
  }
});
//Update room Data

router.patch("/updateroom/:id", async (req, res) => {
 
  try {
    const { id } = req.params;
    
    const updateroom = await room.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateroom);
  } catch (error) {
    res.status(422).json(error);
  }
});

// Delete room Data
router.delete("/deleteroom/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteroom = await room.findByIdAndDelete({ _id: id });
    res.status(201).json(deleteroom);
  } catch (error) {
    res.status(422).json(error);
  }
});







module.exports = router;
