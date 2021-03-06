import React from "react";
import { Label, Wrapper, Submit } from "../Styled";
import { Container, Row, Col } from "../Grid";
import "./style.css";


function FoodForm(props) {
  return (
    <Wrapper>
      <Container>
        <form className="mt-4" >

          <Row className="text-center">
            <Col size="md-3">
              <input type="checkbox" id="cb1"
                name="breakfast"
                value="breakfast_brunch,"
                defaultChecked={props.value}
                onChange={props.handleInputChange} />
              <Label htmlFor="cb1"><img className="img-fluid" alt="" src={process.env.PUBLIC_URL + "./img/activities/breakfast.png"} /><p>Breakfast</p></Label>
            </Col>

            <Col size="md-3">
              <input type="checkbox" id="cb2"
                name="dinner"
                value="restaurants,"
                defaultChecked={props.value}
                onChange={props.handleInputChange} />
              <Label htmlFor="cb2"><img className="img-fluid" alt="" src={process.env.PUBLIC_URL + "./img/activities/dinner.png"} /><p>Dinner</p></Label>
            </Col>

            <Col size="md-3">
              <input type="checkbox" id="cb3"
                name="dessert"
                value="dessert,"
                defaultChecked={props.value}
                onChange={props.handleInputChange} />
              <Label htmlFor="cb3"><img className="img-fluid" alt="" src={process.env.PUBLIC_URL + "./img/activities/dessert.png"} /><p>Dessert</p></Label>
            </Col>
            <Col size="md-3" className="form-group">
              <Label htmlFor="inputState">Type of Food:</Label>
              <select id="inputState"
                name="foodType"
                value={props.value}
                onChange={props.handleInputChange} className="form-control">
                <option defaultValue>Choose...</option>
                <option value="tradamerican,">American</option>
                <option value="asianfusion,">Asian Fusion</option>
                <option value="bbq,">Barbeque</option>
                <option value="buffets,">Buffets</option>
                <option value="cajun,">Cajun/Creole</option>
                <option value="chinese,">Chinese</option>
                <option value="comfortfood,">Comfort Food</option>
                <option value="delis,">Delis</option>
                <option value="diners,">Diners</option>
                <option value="Greek,">Greek</option>
                <option value="indpak,">Indian</option>
                <option value="italian,">Italian</option>
                <option value="japanese,">Japanese</option>
                <option value="jewish,">Jewish</option>
                <option value="mediterranean,">Mediterranean</option>
                <option value="mexican,">Mexican</option>
                <option value="pizza,">Pizza</option>
                <option value="sandwiches,">Sandwiches</option>
                <option value="sushi,">Sushi</option>
                <option value="thai,">Thai</option>
                <option value="vegan,">Vegan</option>
                <option value="vegetarian,">Vegetarian</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col size="md-4">
              <Submit type="Submit" onClick={props.handleFormSubmit} local={props.local}><i className="fas fa-utensils"></i> Submit</Submit>
            </Col>
          </Row>

        </form>
      </Container>
    </Wrapper>
  );
}


export default FoodForm;

