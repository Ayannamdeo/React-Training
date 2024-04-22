import "@testing-library/jest-dom";
import { render,screen,fireEvent } from '@testing-library/react';
import { Q6 } from './Q6';

test("Check that Modal button is present or not",()=>{
    render(<Q6/>);
    const btn=screen.getByRole('button');
    expect(btn).toBeInTheDocument();
})

test("check button after click",()=>{
    render(<Q6/>);
    const btn=screen.getByRole('button');
    fireEvent.click(btn);
    expect(screen.getByText('I am inside the Modal')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByText('I am inside the Modal')).not.toBeInTheDocument();

})