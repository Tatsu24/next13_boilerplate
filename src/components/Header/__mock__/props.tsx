import { HeaderProps } from '../index';

export const mockedWithStringProps: HeaderProps = {
  children: '見出し１'
};

export const mockedWithElementProps: HeaderProps = {
  children: (
    <div>
      <div>見出し1行目</div>
      <div>見出し2行目</div>
    </div>
  )
};
