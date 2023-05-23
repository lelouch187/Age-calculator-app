# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

- Live Site URL: [https://lelouch187.github.io/Age-calculator-app]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [React](https://reactjs.org/) - JS library

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
const proudOfThisFunc = () => {
  let err = { day: null, month: null, years: null };
  for (let key in inputValue) {
    if (inputValue[key] === '') err = { ...err, [key]: 'This field if required' };
  }
  if (inputValue.years > format(new Date(), 'yyyy'))
    err = { ...err, years: 'Must be in the past' };
  if (inputValue.month > 12) err = { ...err, month: 'Must be a valid month' };
  if (inputValue.day > new Date(inputValue.years, inputValue.month, 0).getDate())
    err = { ...err, day: 'Must be a valid day' };
  return err;
}
```
## Author

- Website - [lelouch187](https://github.com/lelouch187)
- Frontend Mentor - [@lelouch187](https://www.frontendmentor.io/profile/lelouch187)
