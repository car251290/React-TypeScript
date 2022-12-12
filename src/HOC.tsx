import React,{Component} from 'react';

const initialState ={
    name:'many',
    message: 'typeScript is cool'
  
  }
  type State = Readonly<typeof initialState>

  const messageHOC = (WrappedComponet:any) => {
    
    class HOC extends Component<{},State> {

 readonly state: State = initialState;
 render () {
    return (
        <>
        <WrappedComponet name={this.state.name} 
        message={this.state.message}/>
        </>
    )
   }
    
  }
  return HOC;
}

export default messageHOC;