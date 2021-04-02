export const ADD_ORDER = 'ADD_ORDER';
export const SET_ORDERS = 'SET_ORDERS'

export const fetchOrders = () => {
    return async dispatch => {
        try {
            const response = await fetch(
              'https://shopapp-759b2-default-rtdb.firebaseio.com/orders/u1.json'
            );
      
            if (!response.ok)  {
              throw new Error('Something went wrong!');
            }
        
            const responseData = await response.json();
            const loadedProducts = [];
        
            for(const key in responseData){
              loadedProducts.push(
                new Product(
                  key, 
                  'u1', 
                  responseData[key].title, 
                  responseData[key].imageUrl, 
                  responseData[key].description, 
                  responseData[key].price
                ) 
              );
            }
        dispatch({type: SET_ORDERS, orders: []});
    }
};

export const addOrder = (cartItems, totalAmount) => {

    return async dispatch => {
        const date = new Date();
        const response = await fetch(
            'https://shopapp-759b2-default-rtdb.firebaseio.com/orders/u1.json',
             {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cartItems,
                    totalAmount,
                    date: date.toISOString()
                })
             }
        );

      if(!response.ok) {
          throw new Error('Something went wrong!');
      }

      const responseData = await response.json();


        dispatch ({ 
            type: ADD_ORDER, 
            orderData: { 
                id: responseData.name, 
                items: cartItems, 
                amount: totalAmount,
                date: date
            } 
        })
    };

   
}