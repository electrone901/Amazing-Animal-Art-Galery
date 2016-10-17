import React from 'react';


var input1=[];
var T = React.createClass({
  getInitialState() {
    return ({result: '', numbers:[] })
  },
  displayNumbers(event){
     var val = event.target.innerHTML;
    // if(val!== " "){
      val = event.target.value;
      input1=input1.concat(val)
      input1.join('');
      
      this.setState({result: input1});
      console.log('input',input1);
      console.log('val',val);
    // }


  },

  render() {

       let options = {
          email: {
            label: "Email ddress",
            placeholder: "Email"
          },
          password: {
            label: "Password",
            placeholder: "Password"
          },
          checkbox: {
            text: "Check me out"
          },
          submitButton: {
            text: "Submit"
          }
       };
       options = Object.assign(options, this.props.options || {});
       return (
          <div>
            <form>
              <div className="form-group">
                <label>{options.email.label}</label>
                <input type="email" onClick={this.displayNumbers} className="form-control" placeholder={options.email.placeholder} />
              </div>
              <div className="form-group">
                <label>{options.password.label}</label>
                <input type="password" onChange={this.onChange}  className="form-control" placeholder={options.password.placeholder} />
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" onChange={this.onChange}  /> {options.checkbox.text} 
                </label>
              </div>
              <button type="submit" onClick={this.onSubmit} className="btn btn-default">{options.submitButton.text}</button>
            </form>
          </div>
       )
     }



})

export default T;

// ReactDOM.render(<App />, document.getElementById('root'))




1111

// var name= [];
// var m= '';
// var T =  React.createClass({
//      propTypes: {
//       options: React.PropTypes.object,
//       onChange: React.PropTypes.func,
//       onSubmit: React.PropTypes.func
//      },

//      onChange(e){
// //
// // displayNumbers(event){
// //      var val = event.target.innerHTML;
// //     if(val!=='+' && val!=='='){
// //       val = event.target.innerHTML;
// //       input1=input1.concat(val)
// //       input1.join('');
      
// //       this.setState({result: input1});
// //       console.log('88',input1);
// //     }
    
   

// //   },

// //   

//  name  = e.target.innerHTML;


//        if(this.props.onChange){
//         name  = this.props.onChange;
//         m  = e.target.innerHTML;
//        };
//        name  = e.target.innerHTML;
//        console.log('luis',this.props.onChange)
//         console.log("luis2", name);
//         console.log("m", m);
//      },
//      onSubmit(e){
//       var val = event.target.innerHTML;
//        e.preventDefault();
//        if(this.props.onSubmit){
//         console.log("luis2",this.props.onSubmit(e));
//        };
//      },
   
//      render() {
//        let options = {
//           email: {
//             label: "Email ddress",
//             placeholder: "Email"
//           },
//           password: {
//             label: "Password",
//             placeholder: "Password"
//           },
//           checkbox: {
//             text: "Check me out"
//           },
//           submitButton: {
//             text: "Submit"
//           }
//        };
//        options = Object.assign(options, this.props.options || {});
//        return <div>
//           <form>
//             <div className="form-group">
//               <label>{options.email.label}</label>
//               <input type="email" onChange={this.onChange} className="form-control" placeholder={options.email.placeholder} />
//             </div>
//             <div className="form-group">
//               <label>{options.password.label}</label>
//               <input type="password" onChange={this.onChange}  className="form-control" placeholder={options.password.placeholder} />
//             </div>
//             <div className="checkbox">
//               <label>
//                 <input type="checkbox" onChange={this.onChange}  /> {options.checkbox.text} 
//               </label>
//             </div>
//             <button type="submit" onClick={this.onSubmit} className="btn btn-default">{options.submitButton.text}</button>
//           </form>
//         </div>
//      }
// });

// 111111

