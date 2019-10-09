import React from 'react';
import { Image } from 'semantic-ui-react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import screenImg from '../../assets/main-banner.jpg';

const content = [{
  title: 'Who We Are',
  body: 'MAI Youth is the youth wing of the <a href=http://maionline.ie/>Muslim Association of Ireland</a>. We are run by youth, for youth. '
        + 'We aim to create an organization that connects Muslim youth across Ireland to form a community of effective individuals who can work both '
        + 'individually and as a group to better their local communities and the Irish society as a whole.<br><br>'
        + 'We saw a gap in the Irish Muslim community where personal development programs focus on younger youth ages 11 to 16 while older youth ages '
        + '20-25 are actively working to provide many of these programs without continuing to develop themselves. Even for the age we believe is most '
        + 'critical for youth development (16 to 20), there is a clear lack of development, mentorship, and guidance.<br><br>'
        + 'We exist to try fill this gap and provide mentorship for youth ages 16 to 25 as we know continuous development and mentorship is not only important, '
        + 'but an essential aspect of a Muslim’s life.',
  color: '#ccf2f9',
}, {
  title: 'Our Vision',
  body: 'MAI Youth envisions Ireland with <b>empowered Muslim youth who uphold their Islamic values and aspire to excel in all elements of life</b>.<br><br>'
        + 'Every Muslim needs to be a role model in their local community. As Muslims, we have a purpose - we have an objective that we need to continue to focus on. '
        + 'This duty is to invite others to the truth, and the most effective method to achieve this goal is by following the footsteps of our role models; '
        + ' prophet Muhammad PBUH and his companions.<br><br>'
        + 'Every Muslim needs to aspire to excel in their respective areas. Whether you are a teacher, doctor, lawyer, engineer, business man / woman, '
        + 'artist, politician, athlete, or any of the other career options you can pick from, you need to aspire for excellence as we are commanded '
        + 'by Allah SWT as prophet Muhammad PBUH said:<br>'
        + '<br><q>Indeed, Allah loves for one of you when performing a deed to perform it to perfection</q>',
}, {
  title: 'Our Mission',
  body: 'We dream of Muslim youth in Ireland being connected at a national level; all of them continuously developing and each one of them having '
        + 'a mentor they know they could always go back to for guidance whenever they need it. To achieve this vision, we have set missions. '
        + 'They are:<br>'
        + '<br><q><b>To Develop</b> Muslim youth in Ireland into effective individuals with true Islamic values.</q>'
        + '<br><q><b>To Assist</b> Muslim youth in Ireland in reaching their true potential.</q>'
        + '<br><q><b>To Encourage</b> and strengthen the continuous involvement of Muslim youth in their Irish communities.</q>',
  color: '#ccf2f9',
}, {
  title: 'What We Do',
  body: 'The main method MAI Youth adopts for the continuous development of Muslim youth is to create groups of 5 to 8 like minded individuals with a '
        + 'suitable assigned mentor. We take great care and understand the responsibilty we have in selecting these mentors as they will be the role '
        + 'models the youth look up to. In addition, we also take into consideration multiple factors like compatibility between the attending youth '
        + 'and relavence of their mentor when forming new groups. While these study circles are not the only aspect of our development program, they '
        + 'are the backbone of MAI Youth.<br><br>'
        + 'These relatively small study groups allow mentors to be able to focus on the development of their groups on an individual level and enables '
        + 'them to form a stronger bond with their group.<br><br>'
        + 'In addition to these study circles, MAI Youth also organizes workshops, talks, monthly qiyam nights, retreats, and social events.',
}];

export default function App() {
  return (
    <div className="page-content">
      <Header />
      <Image src={screenImg} fluid />
      {content.map(({ title, body, color }, key) => (
        <Content
          key={key}
          title={title}
          body={body}
          color={color}
        />
      ))}
      <Footer />
    </div>
  );
}
