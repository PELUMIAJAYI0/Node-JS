// Initialize the dashboard
const dashboard = `
-------------------
ATM Dashboard
-------------------
1. Transfer
2. Top-up/purchase airtime
3. Account balance
4. Subscription
5. Withdraw
-------------------
`;

// Function to request the user's pin
const requestPin = () => {
  const pin = prompt('Please enter your pin:');
  return pin;
}

// Function to display the dashboard
const displayDashboard = () => {
  alert(dashboard);
}

// Function to perform actions based on user's selection
const performAction = (selection) => {
  switch (selection) {
    case '1':
      alert('Transfer selected.');
      break;
    case '2':
      alert('Top-up/purchase airtime selected.');
      break;
    case '3':
      alert('Account balance selected.');
      break;
    case '4':
      alert('Subscription selected.');
      break;
    case '5':
      alert('Withdraw selected.');
      break;
    default:
      alert('Invalid selection. Please try again.');
  }
}

// Function to get user's selection
const getUserSelection = () => {
  const selection = prompt(dashboard + '\nPlease enter the number of your selection:');
  return selection;
}

// Function to start the ATM session
const startAtmSession = () => {
  displayDashboard();
  const pin = requestPin();
  if (pin === '1234') {
    let selection;
    do {
      selection = getUserSelection();
      performAction(selection);
    } while (selection!== '0');
  } else {
    alert('Incorrect pin. Exiting the session.');
  }
}

// Start the ATM session
startAtmSession();