import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';

export default function ArticleTableRows({ articles }) {
  if (!articles || articles.length === 0) {
    return null;
  }

  return articles.map(({ id, title, body, author }) => (
    <Table.Row key={id}>
      <Table.Cell>{title}</Table.Cell>
      <Table.Cell>{author}</Table.Cell>
      <Table.Cell>{`${body.slice(0, 25)}...`}</Table.Cell>
      <Table.Cell>
        <Button size="mini" icon>
          <Icon name="pencil" />
        </Button>
        <Button color="red" size="mini" icon>
          <Icon name="delete" />
        </Button>
      </Table.Cell>
    </Table.Row>
  ));
}
