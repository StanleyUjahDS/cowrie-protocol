import "./ProductCard.css";

import { motion } from "framer-motion";

import Dropdown from "../../../../common/ui/Dropdown/Dropdown";
import Button from "../../../../common/ui/Button/Button";


function ProductCard({
  title,
  description,
  buttonOne,
  image,
  variant = "default"
}) {


  const downloadOptions = [
    {
      label: "iOS App",
      to: "/download/ios"
    },
    {
      label: "Android App",
      to: "/download/android"
    }
  ];



  const dropdownVariant =

    variant === "builders"
      ? "red"
      : variant === "griot"
      ? "mid-green"
      : variant === "investors"
      ? "black"
      : "primary";




  const actionButtonVariant =

    variant === "builders"
      ? "light-red"
      : variant === "griot"
      ? "light-sea"
      : variant === "investors"
      ? "light-green"
      : "light-sea";





  return (


    <motion.div

      className={`product-card ${variant}`}

      initial={{
        opacity:0,
        y:40
      }}

      whileInView={{
        opacity:1,
        y:0
      }}

      viewport={{
        once:true,
        amount:.2
      }}

      transition={{
        duration:.6,
        ease:"easeOut"
      }}

    >



      <motion.h2

        initial={{
          opacity:0,
          y:20
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          delay:.15
        }}

      >

        {title}

      </motion.h2>




      <motion.p

        initial={{
          opacity:0
        }}

        whileInView={{
          opacity:1
        }}

        transition={{
          delay:.25
        }}

      >

        {description}

      </motion.p>




      {image && (

        <motion.img

          src={image}

          alt={title}

          className="product-image"


          initial={{
            opacity:0,
            scale:.9
          }}


          whileInView={{
            opacity:1,
            scale:1
          }}


          transition={{
            delay:.35,
            duration:.5
          }}

        />

      )}






      <motion.div

        className="card-buttons"

        initial={{
          opacity:0,
          y:20
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        transition={{
          delay:.45
        }}

      >


        <Dropdown

          label="Download App"

          items={downloadOptions}

          variant={dropdownVariant}

        />




        <Button

          variant={actionButtonVariant}

          onClick={() =>
            window.open(
              "https://app.cowrieprotocol.com",
              "_blank"
            )
          }

        >

          {buttonOne}

        </Button>



      </motion.div>



    </motion.div>


  );

}


export default ProductCard;