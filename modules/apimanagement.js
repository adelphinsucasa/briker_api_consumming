const uri = 'https://web.briker.co/api/v1/aftersale/get-form/?briker_token=yp3tUAOVhEmQxD8J9dbA';

const AddItem = async (data = {}) => {
  const response = await fetch(uri, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });

  return response.json();
};

const GetFields = async () => {
  const response = await fetch(uri, {
      method: 'GET',  
  });

  return response.json();
};

export { AddItem, GetFields };