import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

import { startRemoveEvent } from "../actions/events";
import { historyPropTypes } from "../common/models";
import EventBody from "../components/EventBody";
import { Button } from "./Filters";
import { RemoveButton } from "../components/EventForm";

const Container = styled.div`
  background: white;
  display: flex;
  margin: 40px auto;
  padding: 0 0 30px;
  width: 60vw;
`;
const DescriptionHeader = styled.p`
  border-left: 1px solid #dbdbdb;
  font-weight: bold;
  margin: 30px 0 0;
  padding: 0 30px;
`;

const P = styled.p`
  border-left: 1px solid #dbdbdb;
  margin: 0 0 45px 0;
  min-height: 360px;
  overflow-wrap: break-word;
  padding: 20px 30px 0;
  width: 540px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 60px 20px 0;
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
        <div>
          <DescriptionHeader>Event description:</DescriptionHeader>
          <P>{this.props.event.description}</P>
        </div>
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
