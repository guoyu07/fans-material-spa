import createMuiTheme from 'material-ui/styles/createMuiTheme';
import { blue, purple } from 'material-ui/colors';

console.log(blue, purple);

export default createMuiTheme({
  palette: {
    primary: blue,
    secondary: purple,
    type: 'light',
  },
});
