import * as Accordion from '@radix-ui/react-accordion';

import { Subtask } from '../../components';
import ChevronDown from './ChevronDown';

import './index.css';

import type { Task } from '../../data';

interface Props {
  task: Task;
}

export default function (props: Props) {
  const { created_at, description, subtasks } = props.task;
  const hasSubtasks = subtasks.length > 0;

  return (
    <Accordion.Root type='single' className='accordion-root' collapsible>
      <Accordion.Item value='item-1'>
        <Accordion.Header className='accordion-header'>
          <Accordion.Trigger className='accordion-trigger'>
            {hasSubtasks && <ChevronDown className='accordion-chevron' />}
            <span>{description}</span>
            <span>{created_at}</span>
          </Accordion.Trigger>
        </Accordion.Header>
        {hasSubtasks && (
          <Accordion.Content className='accordion-content'>
            {subtasks.map((subtask) => (
              <Subtask key={subtask.id} subtask={subtask} />
            ))}
          </Accordion.Content>
        )}
      </Accordion.Item>
    </Accordion.Root>
  );
}
