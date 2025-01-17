import { Grid } from "semantic-ui-react";
import EventList from "./EventList";
import EventForm from "../form/EventForm";

export default function EventDashboard() {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventForm />
      </Grid.Column>
    </Grid>
  )
}
