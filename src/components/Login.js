import "../style/Login.css"
import { motion, useAnimate } from "framer-motion"
import Login_illustration from "../assets/Login.png"
import oeil_ouvert from "../assets/oeil-ouvert.png"
import oeil_fermé from "../assets/oeil-fermé.png"
import google from "../assets/google.png"
import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./Header"
function Login() {


  const [scope, animate] = useAnimate()
 const handleKeyDown = (event) => {
    // Si la touche appuyée est "Enter" (code 13)
    if (event.keyCode === 13) {
      event.preventDefault(); // Annule le comportement par défaut
      // Ajoutez ici le code que vous souhaitez exécuter à la place
    }
  };
  
  function Inputlabelmail({ label}) {
    const [inputmailValue, setInputmailValue] = useState('');
    const animation = async () => {
      await animate(`#${label}`, { y: -25 }, { duration: 0.2 });

    }
    const animation2 = async () => {
      if(inputmailValue=="")
      await animate(`#${label}`, { y:0 }, { duration: 0.2 });
    
    }
    const handleInputmailChange = (e) => {
      setInputmailValue(e.target.value);
    };
    return (<motion.div className="Login-form-input">
      <label className="Login-email-label" id={label} >
        {label}
      </label>
      <input onKeyDown={handleKeyDown} required onClick={() => { animation() }} onBlur={() => { animation2() }}  className="Login-email-input" type={label} value={inputmailValue} onChange={handleInputmailChange} />
    </motion.div>);
  }
  function Inputlabelpass({ label,inputid }) {
    const [inputpassValue, setInputpassValue] = useState('');
    const [open, setopen] = useState(false);
    const animation = async () => {
      await animate(`#${inputid}`, { y: -25 }, { duration: 0.2 });
  
    }
    const animation2 = async () => {
      if(inputpassValue=="")
      await animate(`#${inputid}`, { y: 0 }, { duration: 0.2 });
  
    }
  
    const handleInputpassChange = (e) => {
      setInputpassValue(e.target.value);
    };
    const toggleBoolean = () => {
      setopen(!open);
    };
    return (<motion.div className="Login-form-input">

      <label className="Login-email-label" id={inputid} >
        {label}
      </label>
      <img className="Login-oeil" onClick={toggleBoolean} src={open ? oeil_ouvert : oeil_fermé} alt="eyes" />
      <input onKeyDown={handleKeyDown} required  onClick={() => { animation() }} onBlur={() => { animation2() }}  type={open ? "text" : "password"} className="Login-email-input" value={inputpassValue} onChange={handleInputpassChange} />
    </motion.div>);
  }
  function Formslider(){
    const [scopy, animaty] = useAnimate()
    const [connect, setconnect] = useState(false);
    const slide = async () => {
      if(connect){
       
        await animaty(document.querySelector('.Login-slider2'), { opacity:0 })
        await animaty(document.querySelector('.Login-slider1'), { opacity:1 }, { duration: 0.2 })
        setconnect(false)
        
      }else{
        await animaty(document.querySelector('.Login-slider1'), { opacity:0 })
         await animaty(document.querySelector('.Login-slider2'), { opacity:1 }, { duration: 0.2 })
         
        setconnect(true)
      }
  
    }
    return( <div><motion.div className="Login-slide-form">
          
    <motion.div ref={scopy} className="Login-slide1-form">
      <motion.p  onClick={() => connect && slide()} className="Login-slide1-form-text1" id="Login-slide1-form-text1">Se connecter</motion.p>
      <motion.div className="Login-slider1" id="Login-slider1"></motion.div>
      </motion.div>
    <motion.div ref={scopy} className="Login-slide2-form">
      <motion.p onClick={() => !connect && slide()}  className="Login-slide2-form-text2">S'inscrire</motion.p>
      <motion.div className="Login-slider2" id="Login-slider2"></motion.div>
      </motion.div>
    
  </motion.div>{
    connect ?(<Forminscription/>): (<Formconnexion/>)
  }</div> )
   
  }
  function Formconnexion(){
    return(<form ref={scope} className="Login-form " onSubmit={handleSubmit}>
           <Inputlabelmail label={"Email"}  />
    <Inputlabelpass label={"Mot de passe"} inputid={"Motdepasse"} />
    <button className="Login-submit" type="submit">Se connecter</button>
    <button className="Login-submit-google d-flex flex-direction-row justify-content-center " type="submit"> <motion.img className="Login-google"  src={google} alt="google"/> </button>
    </form> )
  }
  function Forminscription(){
    return(<form ref={scope} className="Login-form " onSubmit={handleSubmit}>
        
           <div className="d-flex justify-content-space-between flex-direction-row">
            <Inputlabelmail label={"Nom"}/>
           <Inputlabelmail label={"Prenom"}/>
           </div>
           <Inputlabelmail label={"Email"}  />
           <Inputlabelpass label={"Mot de passe"} inputid={"MotDePasse"} />
           <Inputlabelpass label={"Confirmer"} inputid={"ConfirmerMotDePasse"} />
    <button className="Login-submit" type="submit">S'inscrire</button>
    <button className="Login-submit-google d-flex flex-direction-row justify-content-center " type="submit"> <motion.img className="Login-google"  src={google} alt="google"/> </button>
    </form> )
  }
 
  const handleSubmit = (e) => {
    e.preventDefault();

  };
  return (
  
  <div className="container-fluid Login-container">
    
    <div className="row row-to-column Login-section1">
      <motion.div className="Login-formulaire col">
        <motion.h1 className="Login-titre">
          Bienvenue dans Votre communauté 
        </motion.h1>
        <motion.div initial={{ x:-200 }} whileInView={{ opacity: 1 ,x:0}} transition={{
          type: "spring",
          stiffness: 100,
          damping: 25,
          duration: 2
        }} className="Login-border-form" >
          <Formslider/>
        </motion.div >
      </motion.div>
      <motion.div  className="col">  <motion.img className="Login_illustration  Login_illustration_resp " src={Login_illustration} /></motion.div>
    </div>
    <div></div>
    





  </div>);
}

export default Login;