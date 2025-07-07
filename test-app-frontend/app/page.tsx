import React from 'react';
import { Button } from './components/Button';
export default function Home() {
  
  const handleButtonClick = () => {    
    console.log("ボタンがクリックされました！");
  };
  return (
   <div>
			<Button message="Playing!">Play Movie</Button>
			<Button message="Uploading!">Upload Image</Button>
		</div>
  );

}
