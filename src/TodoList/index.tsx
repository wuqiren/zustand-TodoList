import './index.less';

import { Button, Input } from 'antd';
import { useState } from 'react';

import useAppStore from './store';
const About = () => {
  const [value, setValue] = useState('');
  const { list, add, remove, fetch } = useAppStore();
  return (
    <div className="App-todolist">
      <Input
        style={{ width: '200px' }}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          value && add(value);
          setValue('');
        }}>
        添加
      </Button>
      <Button
        onClick={() => {
          fetch();
        }}>
        异步加载
      </Button>
      <Button
        type="dashed"
        onClick={() => {
          window.history.go(-1);
        }}>
        返回主页
      </Button>
      <div>
        {list.map((item, key) => (
          <p key={item}>
            <span style={{ display: 'inline-block', width: '200px' }}> {item}</span>
            <Button
              style={{ marginLeft: '20px' }}
              onClick={() => {
                remove(String(key));
              }}
              type="primary">
              删除
            </Button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;
