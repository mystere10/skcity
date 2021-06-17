import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Form, Button, Col } from 'react-bootstrap';
import { handleCreateSneaker } from '../Redux/actions/sneakers';

const AddSneaker = () => {
  const [sneaker, setSneaker] = useState({
    brandName: '',
    model: '',
    price: '',
    picture: '',
    releaseDate: '',
    sizes: [],
  });

  const dispatch = useDispatch();
  const [size, setSize] = useState([]);

  const handleChange = (event) => {
    // event.preventDefault();
    const { name, value } = event.target;
    setSneaker({ ...sneaker, [name]: value });
  };

  const handlePictureChange = (event) => {
    const picture = event.target.files[0];
    setSneaker({ ...sneaker, picture: picture });
  };

  const handleSizeQuantity = (event) => {
    const { name, value } = event.target;
    setSize({ ...size, [name]: value });
  };

  const saveSize = () => {
    setSneaker({ ...sneaker, sizes: sneaker.sizes.concat(size) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', sneaker.picture.name);
    formData.append('picture', sneaker.picture);
    formData.append('brandName', sneaker.brandName);
    formData.append('model', sneaker.model);
    formData.append('price', `$${sneaker.price}`);
    formData.append('releaseDate', sneaker.releaseDate);
    formData.append('sizes', JSON.stringify(sneaker.sizes));

    dispatch(handleCreateSneaker(formData));
  };

  return (
    <Container>
      <div className="row">
        <Form className="sneaker-form" onSubmit={handleSubmit}>
          <Form.Group controlId="formGroupText">
            <Form.Control
              type="text"
              name="brandName"
              placeholder="Brand name"
              value={sneaker.brandName}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formGroupText">
            <Form.Control
              type="text"
              placeholder="Model"
              name="model"
              value={sneaker.model}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formGroupText">
            <Form.Control
              type="number"
              placeholder="Price"
              name="price"
              value={sneaker.price}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formGroupText">
            <Form.File
              id="custom-file"
              label="Picture"
              custom
              name="picture"
              onChange={handlePictureChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupText">
            <Form.Control
              type="date"
              placeholder="Release date"
              name="releaseDate"
              value={sneaker.releaseDate}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formGroupText">
            <Form.Row>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Size"
                  name="size"
                  defaultValue={size}
                  onChange={handleSizeQuantity}
                  required
                />
              </Col>
              <Col>
                <Form.Control
                  type="number"
                  placeholder="Quantity(pair)"
                  name="quantity"
                  defaultValue={size}
                  onChange={handleSizeQuantity}
                  required
                />
              </Col>
              <Col>
                <Button className="mb-2" onClick={saveSize}>
                  save
                </Button>
              </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Button className="mb-2" type="submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

export default AddSneaker;
