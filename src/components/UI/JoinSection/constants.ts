import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "TalentBridge NJ has transformed my career trajectory. Their smart matching system helped me find my dream job, and their user-friendly platform makes job searching a breeze. I've never felt more confident about my professional future.",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
  {
    testimony:
      "I can't express how grateful I am to TalentBridge NJ. Their career coaching services have been a game-changer for my professional growth. The expert guidance and personalized strategies have given me confidence, knowing that my career is in capable hands.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "TalentBridge NJ's career planning services have been a lifeline for me. I always struggled with career direction, but their team crafted a tailored plan that addressed my goals and concerns. It's been a game-changer in achieving my career dreams.",
    person: 'Esther Howard',
    avatar: esther_howard,
  },
  {
    testimony:
      "I can't express how grateful I am to TalentBridge NJ. Their career coaching services have been a game-changer for my professional growth. The expert guidance and personalized strategies have given me confidence, knowing that my career is in capable hands.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "TalentBridge NJ has transformed my career trajectory. Their smart matching system helped me find my dream job, and their user-friendly platform makes job searching a breeze. I've never felt more confident about my professional future.",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Join over 25,000', 'successful candidates'];
