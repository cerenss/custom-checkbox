import { useState } from 'react';
import './App.css';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


function CustomCheckbox() {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="check1"
        checked={checked}
        onChange={toggleCheckbox}
        className="hidden-checkbox"
      />
      <label htmlFor="check1" className='custom-checkbox'>
      {checked ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        Check 1
      </label>
    </div>
  );
}

export default CustomCheckbox;
