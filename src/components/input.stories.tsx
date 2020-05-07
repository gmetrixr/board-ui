import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from '../../packages/components/Button';
import '../../packages/components/Button/index.scss';
import Input from '../../packages/components/Input';
import '../../packages/components/Input/index.scss';
function InputController() {
  function onChange(s: string){
    console.log(s);
  }
  
  return <div style={{width: 426}}>
    <Input label={'username'} onChange={onChange}/>
    <br/>
    <Input onChange={onChange} />
     <br/>
    <div className="flex items-end">
      <div style={{flex: 1}}>
        <Input onChange={onChange} label='Create your room' info='e.g. Design, Tech, Brainstorming etc' placeholder='Name the room' />
      </div>
      <span style={{marginLeft: 40, marginBottom: 30}}><Button> > </Button></span>   
    </div>
  </div>
}

storiesOf('Components', module).add('Input', () => <InputController />);