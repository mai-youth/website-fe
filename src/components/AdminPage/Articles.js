import React from 'react';
import {
  Segment, Header, Table, Button, Icon,
} from 'semantic-ui-react';

function Articles() {
  return (
    <Segment position="center">
      <Header className="ArticlesHeader">
        Articles
      </Header>
      <Button className="NewArticleButton" fixed="right">New Article</Button>
      <Table compact celled>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>Article Name</Table.HeaderCell>
            <Table.HeaderCell>Author</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell width={2}> Actions </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Islam</Table.Cell>
            <Table.Cell>Mahmoud Almahroum</Table.Cell>
            <Table.Cell>Islam In Europe</Table.Cell>
            <Table.Cell>
              <Button size="mini" icon>
                <Icon name="pencil" />
              </Button>
              <Button color="red" size="mini" icon>
                <Icon name="delete" />
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>

      </Table>
    </Segment>
  );
}

export default Articles;
