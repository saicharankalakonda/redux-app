import Items from "../pages/Items";

const initialState ={
    data:[
        {
          "id": 7,
          "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/olive-bread-swirls-7607020.jpg?webp=true&quality=90&resize=620%2C310",
          "title": "Olive",
          "name": "Olive bread swirls ",
          "description": "These olive bread swirls are packed with savoury, umami flavours. ",
          "price": 250
        },
        {
          "id": 8,
          "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/stout-bread-41b4647.jpg?webp=true&quality=90&resize=620%2C310",
          "title": "Stout & apple wheaten bread",
          "description": "Our wholemeal stout & apple wheaten bread is made with buttermilk and treacle for a deliciously dense, moist slice.",
          "name": "Stout & apple wheaten bread",
          "price": 239
        },
        {
          "id": 9,
          "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/pesto-focaccia-8c4939b.jpg?webp=true&quality=90&resize=620%2C310",
          "title": "Pesto focaccia sandwich",
          "description": "Pack up our pesto focaccia sandwich for an instant veggie picnic.",
          "name": "Pesto focaccia sandwich",
          "price": 300
        },
        {
          "id": 10,
          "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/asparagus-loaf-d3f4a5a.jpg?webp=true&quality=90&resize=620%2C310",
          "title": "Asparagus, sundried tomato & olive loaf",
          "description": "Bring a taste of spring to your table with our easy asparagus, sundried tomato & olive loaf. ",
          "name": "Asparagus, sundried tomato & olive loaf",
          "price": 355
        },
        {
          "id": 11,
          "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/apricot-brioche-ea2dd18.jpg?webp=true&quality=90&resize=620%2C310",
          "title": "Apricot brioche ",
          "description": "A slice of this soft, golden-brown apricot brioche, lightly toasted, is the perfect breakfast.",
          "name": "Apricot brioche ",
          "price": 255
        },
        {
          "id": 12,
          "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/courgette-bread-b2d6266.jpg?webp=true&quality=90&resize=620%2C310",
          "title": "Courgette and cheddar soda bread",
          "description": "Make a simple loaf packed with mature cheddar and thyme. ",
          "name": "Courgette and cheddar soda bread",
          "price": 345
        }
      ],
      totalcost:0
}


function breadReducer(state = initialState, action) {


    switch (action.type) {
        case "addToCart":
          const items = state.data;
        return {
          ...state,

          totalcost:state.totalcost + action.payload+1
        }
    case "removeFromCart":
        return {totalcost:state.totalcost - action.payload}


      default:
        return state;
    }
  }

export default breadReducer
