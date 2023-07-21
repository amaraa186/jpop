import { Box, Table, Text } from "gestalt";
import Title from "@/app/components/Title";

const Schedule = () => {
  return (
    <Box paddingX={12} paddingY={10} id="schedule">
      <Title text="АРГА ХЭМЖЭЭНИЙ ХӨТӨЛБӨР" />
      <Box height={20} />
      <Table accessibilityLabel="Sticky Column" borderStyle="sm">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <Text weight="bold">Цаг</Text>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Text weight="bold">Content</Text>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Text>11:00 AM to 12:00 PM</Text>
            </Table.Cell>
            <Table.Cell>
              <Text weight="bold">
                Vestibulum vel eros vel metus lacinia feugiat a nec metus.{" "}
              </Text>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Text>11:00 AM to 12:00 PM</Text>
            </Table.Cell>
            <Table.Cell>
              <Text weight="bold">
                Vestibulum vel eros vel metus lacinia feugiat a nec metus.{" "}
              </Text>
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Text>11:00 AM to 12:00 PM</Text>
            </Table.Cell>
            <Table.Cell>
              <Text weight="bold">
                Vestibulum vel eros vel metus lacinia feugiat a nec metus.{" "}
              </Text>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Box>
  );
};

export default Schedule;
