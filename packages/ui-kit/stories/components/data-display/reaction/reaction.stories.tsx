import { ReactNode } from 'react'

import {
  AnEasySmile,
  ConfusedFace,
  DizzyFace,
  ExplodingHead,
  FaceWithSpiralEyes,
  Fire,
  ManFacepalming,
  NerdFace,
  NeutralFace,
  Reaction,
  ThumbsUpLightSkinTone,
  WinkingFace,
  YawningFace,
} from '../../../../src'
import { Meta } from '@storybook/react-vite'

export default {
  component: Reaction,
  title: 'Components/Data Display/Reaction',
} as Meta<typeof Reaction>

enum Reactions {
  BadOrganization = 'bad_organization',
  BadPresentation = 'bad_presentation',
  DidNotLikeThePresentation = 'did_not_like_the_presentation',
  EasyToUnderstand = 'easy_to_understand',
  GreatPresentation = 'great_presentation',
  HardToUnderstand = 'hard_to_understand',
  NoReview = 'no_review',
  ProfessionalMentor = 'professional_mentor',
  TooMuchInformation = 'too_much_information',
  UsefulLesson = 'useful_lesson',
}

const reactionsData: ReactionsData[] = [
  {
    icon: <ThumbsUpLightSkinTone size={16} />,
    reaction: Reactions.ProfessionalMentor,
    title: 'Преподаватель профессионал',
  },
  {
    icon: <Fire size={16} />,
    reaction: Reactions.GreatPresentation,
    title: 'Отличная подача материала',
  },
  {
    icon: <NerdFace size={16} />,
    reaction: Reactions.UsefulLesson,
    title: 'Полезное занятие',
  },
  { icon: <AnEasySmile size={16} />, reaction: Reactions.EasyToUnderstand, title: 'Все понятно' },
  {
    icon: <FaceWithSpiralEyes size={16} />,
    reaction: Reactions.HardToUnderstand,
    title: 'Сложно для понимания',
  },
  {
    icon: <DizzyFace size={16} />,
    reaction: Reactions.BadPresentation,
    title: 'Неудачная подача материала',
  },
  {
    icon: <ManFacepalming size={16} />,
    reaction: Reactions.BadOrganization,
    title: 'Плохая организация занятия',
  },
  {
    icon: <ConfusedFace size={16} />,
    reaction: Reactions.DidNotLikeThePresentation,
    title: 'Не нравится стиль преподавания',
  },
  {
    icon: <ExplodingHead size={16} />,
    reaction: Reactions.TooMuchInformation,
    title: 'Нового материала слишком много',
  },
]

type ReactionsData = {
  icon: ReactNode
  reaction: Reactions
  title: string
}

export const List = {
  render: () => {
    return (
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
          {reactionsData.map(data => {
            return <Reaction icon={data.icon} key={data.reaction} text={data.title} />
          })}
        </div>
        <div>
          <Reaction
            icon={<NeutralFace size={16} />}
            text={'Воздержусь от оценки'}
            variant={'secondary'}
          />
        </div>
      </div>
    )
  },
}

export const ListWithCount = {
  render: () => {
    return (
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
          {reactionsData.map((data, index) => {
            return <Reaction count={index} icon={data.icon} key={data.reaction} text={data.title} />
          })}
        </div>
        <div>
          <Reaction
            icon={<NeutralFace size={16} />}
            text={'Воздержусь от оценки'}
            variant={'secondary'}
          />
        </div>
      </div>
    )
  },
}
