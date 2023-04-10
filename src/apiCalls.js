export async function fetchAllTricks() {
  try {
    const response = await fetch('http://localhost:3001/api/v1/tricks');
    const tricks = await response.json();
    console.log(tricks)
    return tricks;
  } catch (error) {
    console.error('Sorry, there was an error:', error);
  }
}