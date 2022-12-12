import React,{Component} from 'react';
import './App.css';
import Message from './Message'



class App extends Component {
  //readonly state: State = initialState;
  //component will update the component will render
  componentWillUnmount(): any {
      console.log('Almost there...')

  }
// component after update, the second update. component has render
  componentDidMount(): any {
      console.log('finally there...')
  }


  //interfaces 


  render() {
    //let firstValue: number[] =[2,3,56];
    //let firstValue : Array<string> = ['2','3','Manny']
    //tuple
    let atuple:[string,number] =['manny',2] ;
    //enum
    enum Codes {first=1,second=2}
    //any is for prototype a object that you will now what will be
    let firstName:any="Manny";
    // void is use for return an argument 

    const warning =(): void => {
      console.log('warning')
    }


    return(
      <div className='App'>
        <p>
          The Value {atuple[1]} is of {typeof atuple[0]} type!
          </p>
          <>
          <Message/>
          </>

      </div>
    )
  } 
}
export default App;
 