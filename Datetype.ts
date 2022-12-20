const dateOfBirth = new Date (1990,4,7);

console.log(dateOfBirth.getDate())

function calculateRenewal(startDate: Date):Date {
    const result = new Date(startDate);
    result.setDate(result.getDate() + 30);
    return result;
  }