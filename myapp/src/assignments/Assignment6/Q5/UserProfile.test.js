import { render, screen } from '@testing-library/react';
import { Userprofile } from './Userprofile';
import "@testing-library/jest-dom";

test('Userprofile Component working as expected', () => {
    const userData = [
    {
        name:'ayan',
        email:'xyz@gmail.com',
        phone:'12345'
    },
    {
        name:'namdeo',
        email:'glc@gmail.com',
        phone:'123456'
    }, ];

    render(<Userprofile dataprop={userData} />);

    userData.forEach((user) => {
      const nameElement = screen.getByText(user.name);
      const emailElement = screen.getByText(user.email);
      const phoneElement = screen.getByText(user.phone);
      console.log(nameElement);
      
      expect(nameElement).toBeInTheDocument();
      expect(emailElement).toBeInTheDocument();
      expect(phoneElement).toBeInTheDocument();
    });
});