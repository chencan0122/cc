import React from 'react';
import { Helmet } from 'react-helmet-async';
import styles from './Pages.module.css';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>关于我 | 我的技术博客</title>
        <meta name="description" content="学生陈灿，分享前端工程化与性能优化心得。" />
      </Helmet>
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>关于我</h1>
        <div className={styles.aboutContent}>
          <p>👋 你好，我是陈灿，一名网络工程专业学生。</p>
          <p>希望我们多多交流，互相学习。</p>
          <p>这个博客记录我的学习心得、实战技巧，希望能帮助到同样热爱网络工程的你。</p>
          <p>📧 联系我：1154827041@qq.com</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
