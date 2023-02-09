const db = require("../../data/db-config.js");
/*
  Eğer `scheme_id` veritabanında yoksa:

  durum 404
  {
    "message": "scheme_id <gerçek id> id li şema bulunamadı"
  }
*/
const checkSchemeId = async(req, res, next) => {
  try{
    const id = req.params.scheme_id;
    const possible = await db("schemes")
    .where("scheme_id", id ).first();
    if(!possible){
      next({
        status:404,
        message:`scheme_id ${id} id li şema bulunamadı`
      })
    }
    else{
      req.scheme=possible;
      next();
    }
  } 
  catch(err){
    next(err)
  }
}

/*
  Eğer `scheme_name` yoksa, boş string ya da string değil:

  durum 400
  {
    "message": "Geçersiz scheme_name"
  }
*/
const validateScheme = async(req, res, next) => {
  try{
    const {scheme_name} = req.body;
    if(scheme_name == undefined || typeof scheme_name != "string"  || scheme_name.trim() == ""){
      next({
        status:400,
        message: "Geçersiz scheme_name"
      })
    }
    else{
      next();
    }
  }
  catch(err){
    next(err);
  }
}

/*
  Eğer `instructions` yoksa, boş string yada string değilse, ya da
  eğer `step_number` sayı değilse ya da birden küçükse:

  durum 400
  {
    "message": "Hatalı step"
  }
*/
const validateStep = async(req, res, next) => {
  try{
    const {instructions, step_number} = req.body;
    const expInstructions = (instructions === undefined || typeof instructions !== "string" || instructions.trim() === "");
    const expStepNumber = (isNaN(step_number) || step_number < 1);
    if(expStepNumber || expInstructions){
      next({
        status:400,
        message: "Hatalı step"
      })
    }
    else{
      next();
    }
  }
  catch(err){
    next(err);
  }
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
