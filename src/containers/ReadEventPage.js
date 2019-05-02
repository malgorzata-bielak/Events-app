import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { startRemoveEvent } from "../actions/events";
import { historyPropTypes } from "../common/models";
import EventBody from "../components/EventBody";
import { Button, RemoveButton } from "../components/EventForm";

const Container = styled.div`
  align-items: center;
  background: white;
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  max-width: 80vw;
  padding: 0 0 30px;
  position: relative;

  @media (min-width: 1050px) {
    align-items: flex-start;
    flex-direction: row;
  }

  @media (min-width: 1150px) {
    width: 920px;
  }
`;

const Description = styled.div`
  margin: 0 auto 120px;
  width: 100%;

  @media (min-width: 377px) {
    margin: 0 auto 60px;
  }

  @media (min-width: 478px) {
    width: 90%;
  }

  @media (min-width: 1050px) {
    max-width: 540px;
    min-width: 460px;
  }

  p {
    @media (min-width: 1050px) {
      border-left: 1px solid #dbdbdb;
    }
  }
`;

const DescriptionHeader = styled.p`
  font-weight: bold;
  margin: 30px 0 0;
  padding: 0 30px;
`;

const P = styled.p`
  border: none;
  margin: 0 0 45px 0;
  min-height: 360px;
  overflow-wrap: break-word;
  padding: 20px 30px 0;
  width: 100%;
`;

const Buttons = styled.div`
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  left: 0;
  margin: 0 auto 40px;
  position: absolute;
  right: 0;
  width: 50vw;

  button {
    margin: 7px 0;
  }

  @media (min-width: 377px) {
    flex-wrap: nowrap;
    justify-content: space-evenly;
    width: 280px;

    button {
      margin: 0 7px;
    }
  }

  @media (min-width: 1050px) {
    bottom: initial;
    position: initial;
  }
`;

class ReadEventPage extends React.Component {
  onEditClick = () => {
    this.props.history.push(`/edit/${this.props.event.id}`);
  };

  onRemoveClick = () => {
    this.props.startRemoveEvent(this.props.event.id, this.props.uid);
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <Container>
        <div>
          <EventBody {...this.props.event} />
          <Buttons>
            <Button onClick={this.onEditClick}>Edit event</Button>
            <RemoveButton onClick={this.onRemoveClick}>Remove event</RemoveButton>
          </Buttons>
        </div>
        <Description>
          <DescriptionHeader>Event description:</DescriptionHeader>
          <P>{this.props.event.description}</P>
        </Description>
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => ({
  event: state.events.find(event => event.id === props.match.params.id),
  uid: state.auth.uid,
});

ReadEventPage.propTypes = {
  ...historyPropTypes,
  event: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  startRemoveEvent: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  { startRemoveEvent },
)(ReadEventPage);
