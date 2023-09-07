import React from "react";
import "../csspublico/Forum.css";

const Forum = (props) => {
  return (
    <div classNameName="">
      <div className="mb-3 ">
        <label for="exampleFormControlInput1 " className="form-label ">
          EMAIL:
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          {props.consulta}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button
        classNameName="btn boton"
        onClick={() => {
          let email = document.getElementById("exampleFormControlInput1").value;
          let consulta = document.getElementById("exampleFormControlTextarea1").value;
          console.log(`Email: ${email} - Consulta: ${consulta} `)
          document.getElementById("exampleFormControlInput1").value ="";
          document.getElementById("exampleFormControlTextarea1").value = "";
          alert("Mensaje Enviado");

        }}
      >
        Enviar
      </button>
    </div>
  );
};

export default Forum;
