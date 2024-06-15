import { Card, CardContent, CardHeader, CardTitle } from '..'
import { InfoFill as InfoIcon } from '../../..'
// @ts-expect-error
import DocumentationTemplate from './card.mdx'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Card,
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
  subcomponents: { CardContent, CardHeader, CardTitle },
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'

export const Primary: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Some title</CardTitle>
        </CardHeader>
        <CardContent>{text}</CardContent>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `
import { Card, CardContent, CardHeader, CardTitle } from '@it-incubator/ui-kit'

<Card>
  <CardHeader>
    <CardTitle>Some title</CardTitle>
  </CardHeader>
  <CardContent>
    ${text}
  </CardContent>
</Card>`,
      },
    },
  },
}

export const PrimaryWithIcon: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <InfoIcon
            backgroundColor={'var(--color-neutral-light-50)'}
            color={'var(--color-danger-400)'}
            size={16}
          />
          <CardTitle asChild>
            <div>Some title</div>
          </CardTitle>
        </CardHeader>
        <CardContent>{text}</CardContent>
      </>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `
import { Card, CardContent, CardHeader, CardTitle, InfoIcon } from '@it-incubator/ui-kit'

<Card>
  <CardHeader>
      <InfoIcon
        backgroundColor={'var(--color-neutral-light-50)'}
        color={'var(--color-danger-400)'}
        size={16}
      />
      <CardTitle>Some title</CardTitle>
  </CardHeader>
  <CardContent>
    ${text}
  </CardContent>
</Card>`,
      },
    },
  },
}

export const PrimaryWithoutTitle: Story = {
  args: {
    children: (
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </CardContent>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `
import { Card, CardContent } from '@it-incubator/ui-kit'

<Card>
  <CardContent>
    ${text}
  </CardContent>
</Card>`,
      },
    },
  },
}

export const Info: Story = {
  args: {
    children: <CardContent>{text}</CardContent>,
    variant: 'info',
  },
  parameters: {
    docs: {
      source: {
        code: `
import { Card, CardContent } from '@it-incubator/ui-kit'

<Card variant="info">
  <CardContent>
    ${text}
  </CardContent>
</Card>`,
      },
    },
  },
}

/**
 * Change the default rendered element for the one passed as a child, merging their props and behavior.
 *
 * See https://www.radix-ui.com/primitives/docs/guides/composition for more information.
 */
export const CardAsChild: Story = {
  args: {
    asChild: true,
    children: (
      <section>
        <CardContent>{text}</CardContent>
      </section>
    ),
  },
  parameters: {
    docs: {
      source: {
        code: `
import { Card, CardContent } from '@it-incubator/ui-kit'

<Card asChild>
  <section>
    <CardContent>
      ${text}
    </CardContent>
  </section>
</Card>`,
      },
    },
  },
}
