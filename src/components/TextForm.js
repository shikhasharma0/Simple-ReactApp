import React, {useState} from 'react'   // useSates ko import kiya  react hooks sa

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();  // click on button to chamge all text in Uppercase 
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
      }

      const handleLoClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();  // click on button to chamge all text in lowercase 
        setText(newText)
        props.showAlert("Converted to lowercase", "success")

      }
    

      function titleCase(str) {
        // split the string into an array of words
        const words = str.split(' ');
      
        // iterate through each word and convert it to title case
        const titleCaseWords = words.map(word => {
          // convert the first letter to uppercase and the rest to lowercase
          return word[0].toUpperCase() + word.slice(1).toLowerCase();
        });
      
        // join the words back into a single string and return it
        return titleCaseWords.join(' ');
      }
      

      const handletitleClick = ()=>{
        // console.log("UpperCase was clicked" + text);
        let newText = titleCase(text)  // click on button to chamge all text in lowercase 
        setText(newText)
        props.showAlert("Converted to Titlecase", "success")

      }
      
      const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "));
        props.showAlert("Remove ExtraSpaces", "success")

      }

      const handleCopySpaces = ()=>{
        let newText = document.getElementById("My Box");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Coplied to Clipboard", "success")

      }

    const handleOnChange = (event)=>{        // use OnChange event for write any text value in myBox
        // console.log("On Change"); 
        setText(event.target.value)
      }

    const [text, setText] = useState(""); //  use here array distrucring ,
                                                                            //   yhee usestate ka liye use kiya hooks sa text ko change karne ka liye without reload page

   //text = "new text";  // Wrong Way to change the state 
    //  setText("new text") ; // Right Way to change the state
  return ( 
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'dark'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">
    {/* <label htmlfor="My Box" className="form-label"></label> */}

{/* text is a state variable, as text a variable which belongs my state and here i can update it with the help of setText */}
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'dark'}} id="My Box" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handletitleClick}>Convert to Titlecase</button>
  <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>Convert to ExtraSpaces</button>
  <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopySpaces}>Copy Text</button>

  </div>
  <div className='container my-3' style={{color: props.mode==='dark'?'white':'dark'}}></div>
  <h1> Your text summary</h1>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
  <p>{0.007 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text: "Nothing to preview"}</p>
  </>
  )
}

