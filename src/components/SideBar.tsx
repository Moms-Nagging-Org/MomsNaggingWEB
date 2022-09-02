import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    '대시보드',
    '/dashboard',
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 21V9L12 3L19.5 9V21H4.5Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 14.5V21H14.5V14.5H9.5Z"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 21H19.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  getItem(
    '회원관리',
    '/user',
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 6.74109H6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17.0006H6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.61377 16.4515L8.96477 15.1749C10.1262 10.9511 15.1013 10.9511 16.2627 15.1749L16.6137 16.4515"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6138 11.9929C13.8411 11.9929 14.836 10.998 14.836 9.77068C14.836 8.54338 13.8411 7.54846 12.6138 7.54846C11.3865 7.54846 10.3916 8.54338 10.3916 9.77068C10.3916 10.998 11.3865 11.9929 12.6138 11.9929Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="bevel"
      />
    </svg>
  ),
  getItem(
    'PUSH알림',
    '/push',
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.13 21.67L15.74 19.07C15.699 19.0367 15.6478 19.0185 15.595 19.0185C15.5422 19.0185 15.491 19.0367 15.45 19.07L12.24 21.82C12.1983 21.8559 12.145 21.8756 12.09 21.8756C12.035 21.8756 11.9817 21.8559 11.94 21.82L8.3 19.07C8.2615 19.0355 8.21166 19.0165 8.16 19.0165C8.10834 19.0165 8.0585 19.0355 8.02 19.07L4.88 21.65C4.84517 21.6751 4.80423 21.6904 4.76145 21.6944C4.71868 21.6983 4.67563 21.6907 4.63681 21.6723C4.59799 21.6539 4.56482 21.6254 4.54076 21.5898C4.51669 21.5542 4.50262 21.5129 4.5 21.47V4.10999C4.5 3.57955 4.71071 3.07084 5.08579 2.69577C5.46086 2.3207 5.96957 2.10999 6.5 2.10999H17.5C18.0304 2.10999 18.5391 2.3207 18.9142 2.69577C19.2893 3.07084 19.5 3.57955 19.5 4.10999V21.49C19.4995 21.5327 19.4872 21.5744 19.4643 21.6105C19.4415 21.6466 19.409 21.6756 19.3706 21.6943C19.3322 21.713 19.2894 21.7206 19.2469 21.7163C19.2044 21.712 19.1639 21.696 19.13 21.67V21.67Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.08984 6.21997H15.0898"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.08984 10.22H12.0898"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.08984 14.22H16.0898"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  getItem(
    '추천습관',
    '/habit',
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 2H5.5C4.39543 2 3.5 2.89543 3.5 4V8C3.5 9.10457 4.39543 10 5.5 10H9.5C10.6046 10 11.5 9.10457 11.5 8V4C11.5 2.89543 10.6046 2 9.5 2Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 14H5.5C4.39543 14 3.5 14.8954 3.5 16V20C3.5 21.1046 4.39543 22 5.5 22H9.5C10.6046 22 11.5 21.1046 11.5 20V16C11.5 14.8954 10.6046 14 9.5 14Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 16H14.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 20H14.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5 8H14.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5 4H14.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  getItem(
    '문의사항',
    '/question',
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 2H4C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 7H22"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12H22"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 17H22"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 2V7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 17V22"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  getItem(
    '탈퇴관리',
    '/sign-out',
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_1624)">
        <path
          d="M2.5 21L3.29 18.13C4.6 13.4 8.05 11 11.5 11"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 10.99C14.2614 10.99 16.5 8.75141 16.5 5.98999C16.5 3.22857 14.2614 0.98999 11.5 0.98999C8.73858 0.98999 6.5 3.22857 6.5 5.98999C6.5 8.75141 8.73858 10.99 11.5 10.99Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <path
          d="M16.5 23.01C19.2614 23.01 21.5 20.7714 21.5 18.01C21.5 15.2486 19.2614 13.01 16.5 13.01C13.7386 13.01 11.5 15.2486 11.5 18.01C11.5 20.7714 13.7386 23.01 16.5 23.01Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5 18.01H18.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_1624">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
];

interface Props {
  open?: string;
}

const SideBar = ({ open = '/dashboard' }: Props) => {
  const navigate = useNavigate();
  return (
    <Sider>
      <Logo onClick={() => navigate('/dashboard')}>
        <svg
          width="181"
          height="170"
          viewBox="0 0 181 170"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_23_8267)">
            <path
              d="M139.812 70.4255C141.162 70.6561 142.13 71.2211 142.361 72.0974C142.649 73.1812 141.726 74.4265 140.147 75.4296C140.32 84.3194 138.29 94.3853 133.067 101.684C121.698 117.573 98.8917 125.044 77.6646 121.158C66.9992 119.198 59.8274 114.874 53.2206 106.953C45.4146 103.736 40.2597 92.0444 38.8424 86.4294C37.425 80.8144 36.2242 76.4786 36.6747 73.6193C35.0711 73.0195 33.9181 71.8665 33.3416 71.29C32.7651 70.7135 31.6121 68.4074 31.6121 65.5249C31.6121 62.6423 32.4431 62.1583 32.4431 62.1583C32.4431 62.1583 28.7295 61.4893 28.2115 55.7129C28.0501 51.8734 30.506 49.9591 30.506 49.9591C29.8373 50.4434 28.2 48.8061 27.5197 46.5925C26.8394 44.379 26.9778 43.1796 27.1046 41.4846C27.3813 37.7719 28.6719 34.3818 31.6121 32.0873C32.8379 31.1306 34.1496 30.7154 35.268 30.6808C35.4064 30.6693 36.2596 30.6462 36.3403 30.8307C35.2565 28.2018 37.8384 23.2782 41.9893 21.7101C46.8584 19.8706 50.6369 21.7101 50.6369 21.7101C50.6369 21.7101 54.7195 16.5712 63.6785 16.5217C69.9394 16.4871 74.8628 20.2575 77.5724 22.944C86.0355 20.4651 92.3887 20.3728 101.232 21.9179C112.912 23.9587 126.357 31.6378 132.756 42.5915C134.509 45.5894 135.731 48.8294 136.25 52.2654C136.423 53.3953 136.78 55.1249 135.858 56.0358C135.835 55.9896 135.592 55.367 135.477 55.1364C135.108 54.3985 134.682 53.6951 134.232 53.0033C136.077 56.4047 137.506 60.0483 138.452 63.8878C138.452 63.9109 138.463 63.934 138.463 63.957C139.075 66.436 139.524 67.8427 139.812 70.4255Z"
              fill="#FEFEFE"
            />
          </g>
          <path
            d="M78.8859 30.3587C78.8859 30.3587 75.2769 21.7111 64.8997 20.5581C55.0991 19.9816 51.7899 25.7468 51.7899 25.7468C51.7899 25.7468 46.0248 24.0172 43.7187 25.7468C41.4127 27.4763 40.2597 29.7823 41.4127 33.2413C41.4127 33.2413 33.7608 33.2413 32.1885 39.0065C30.6162 44.7716 32.8227 48.4381 35.6476 49.9601C35.6476 49.9601 32.0732 52.2662 32.765 55.7253C33.4568 59.1843 35.0711 60.3374 37.9536 60.9139C37.9536 60.9139 34.4946 64.3729 36.2241 67.2555C37.9536 70.138 40.3058 69.6195 42.9116 69.0776L63.7467 51.3903L78.8859 30.3587Z"
            fill="#EF761E"
          />
          <path
            d="M133.47 64.4069C136.26 75.8218 135.58 88.8394 128.558 98.6401C118.25 113.064 98.6026 118.91 79.3471 115.37C62.9973 112.373 49.6568 99.1243 46.9011 82.567C43.9033 64.5798 54.0153 46.4428 69.3389 37.2532C70.8955 36.3193 72.4982 35.4776 74.1585 34.7396C76.6145 33.6443 79.1627 32.7795 81.78 32.1684C104.368 26.9337 127.982 42.0152 133.47 64.3377C133.458 64.3723 133.47 64.3838 133.47 64.4069Z"
            fill="#FFE1B5"
          />
          <path
            d="M128.304 45.025C122.493 35.0974 110.294 28.1217 99.7095 26.2768C79.2779 22.714 57.1745 31.3501 47.443 50.2366C40.3289 64.0498 40.5018 83.3744 50.0027 96.0692C52.9199 99.9664 57.4167 102.664 61.925 99.4245C63.8159 98.0639 64.6461 95.804 64.7499 93.5441C64.796 92.6563 64.7383 91.7684 64.623 90.8806C64.5308 90.1427 64.5308 88.5054 63.3778 88.6899C62.3631 88.8513 61.6252 90.2234 61.1755 91.0074C60.0571 92.9445 55.076 92.3565 54.8915 84.6658C54.7071 76.9752 58.9386 81.3336 60.5067 83.0862C60.5067 83.0862 63.101 86.9488 67.5978 85.5191C72.0946 84.0893 70.4343 81.4604 70.4343 81.4489C70.515 81.5757 69.8232 82.3483 69.7424 82.429C68.428 83.8933 64.9459 84.2392 64.9228 81.5527C64.9113 79.6848 66.5947 78.6701 67.8284 77.5517C68.5779 76.8829 70.0076 75.776 70.2844 74.8306C70.3536 74.5884 70.8263 72.4784 71.1837 72.513C78.6322 73.274 86.1499 71.579 92.9182 68.4889C98.5449 65.9177 104.056 62.4471 107.861 57.4776C111.205 53.1076 112.566 47.7 113.442 42.35C113.269 43.4338 119.68 45.4631 120.66 46.0396C124.834 48.4725 128.57 52.0815 130.783 56.4053C130.899 56.6244 131.106 57.1778 131.129 57.2239C131.971 56.3938 131.637 54.8372 131.487 53.7995C131.002 50.6863 129.896 47.7461 128.304 45.025Z"
            fill="#EF761E"
          />
          <path
            d="M90.9856 89.2608C94.061 88.4368 96.2254 86.5422 95.82 85.0291C95.4146 83.516 92.5928 82.9574 89.5174 83.7814C86.442 84.6054 84.2776 86.5 84.683 88.0131C85.0884 89.5262 87.9102 90.0849 90.9856 89.2608Z"
            fill="#FFA859"
          />
          <path
            d="M132.171 78.2276C135.246 77.4036 137.411 75.509 137.005 73.9959C136.6 72.4828 133.778 71.9242 130.703 72.7482C127.627 73.5722 125.463 75.4668 125.868 76.9799C126.274 78.493 129.096 79.0517 132.171 78.2276Z"
            fill="#FFA859"
          />
          <path
            d="M113.694 92.1317C109.312 92.1317 106.372 88.5342 106.257 88.3844C106.118 88.2229 106.095 87.9923 106.176 87.7963C106.257 87.6003 106.441 87.4619 106.66 87.4504C106.753 87.4389 116.265 86.5626 121.05 83.2073C121.154 83.1381 121.269 83.1035 121.384 83.1035C121.477 83.1035 121.569 83.1266 121.65 83.1727C121.846 83.2765 121.961 83.4725 121.961 83.68C121.961 83.7492 121.915 90.4252 115.55 91.9241C114.939 92.0625 114.316 92.1317 113.694 92.1317Z"
            fill="#F93B3B"
          />
          <path
            d="M121.373 83.6804C121.373 83.6804 121.396 89.9528 115.412 91.3595C114.824 91.4979 114.247 91.5555 113.694 91.5555C109.531 91.5555 106.707 88.0273 106.707 88.0273C106.707 88.0273 116.403 87.174 121.373 83.6804ZM121.385 82.5273C121.154 82.5273 120.923 82.5965 120.727 82.7349C116.069 85.9979 106.707 86.8742 106.614 86.8742C106.188 86.9088 105.819 87.174 105.657 87.5661C105.496 87.9581 105.554 88.4078 105.819 88.7421C105.946 88.9036 109.047 92.7085 113.705 92.7085C114.363 92.7085 115.031 92.6278 115.689 92.4779C121.131 91.1981 122.549 86.1594 122.538 83.6688C122.538 83.2422 122.295 82.8502 121.915 82.6542C121.742 82.5735 121.557 82.5273 121.385 82.5273Z"
            fill="#F93B3B"
          />
          <path
            d="M110.823 90.8529C110.823 90.8529 113.486 92.5132 116.542 91.0835C116.542 91.0835 118.456 90.3571 119.84 88.3047C119.828 88.3162 114.317 88.3047 110.823 90.8529Z"
            fill="#F6A68D"
          />
          <path
            d="M98.059 69.3828L98.7969 72.1616"
            stroke="#5B351F"
            strokeWidth="1.15302"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M94.6115 71.793L97.4248 73.142"
            stroke="#5B351F"
            strokeWidth="1.15302"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M100.45 78.3268C102.215 77.8539 103.204 75.82 102.658 73.7841C102.113 71.7482 100.24 70.4811 98.4742 70.9541C96.7089 71.4271 95.7201 73.461 96.2656 75.4969C96.8111 77.5328 98.6844 78.7998 100.45 78.3268Z"
            fill="#5B351F"
          />
          <path
            d="M102.245 69.752L100.48 72.3232"
            stroke="#5B351F"
            strokeWidth="1.15302"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M94.0233 67.1242C93.4814 65.0834 94.473 63.054 96.2371 62.5813C98.0012 62.1086 99.8807 63.3769 100.423 65.4062"
            stroke="#5B351F"
            strokeWidth="1.15302"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M118.986 63.7793L119.724 66.5581"
            stroke="#5B351F"
            strokeWidth="1.15302"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M115.539 66.1895L118.352 67.5385"
            stroke="#5B351F"
            strokeWidth="1.15302"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M121.377 72.7233C123.143 72.2503 124.132 70.2165 123.586 68.1806C123.041 66.1446 121.167 64.8776 119.402 65.3506C117.637 65.8236 116.648 67.8575 117.193 69.8934C117.739 71.9293 119.612 73.1963 121.377 72.7233Z"
            fill="#5B351F"
          />
          <path
            d="M123.172 64.1367L121.419 66.7195"
            stroke="#5B351F"
            strokeWidth="1.15302"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M114.951 61.5207C114.409 59.4798 115.4 57.4505 117.164 56.9778C118.929 56.505 120.808 57.7734 121.35 59.8027"
            stroke="#5B351F"
            strokeWidth="1.15302"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.7594 142.162C13.1363 142.148 10.5387 144.459 10.5523 147.795C10.5387 151.158 13.1363 153.414 16.7594 153.4C20.109 153.414 22.5973 151.432 22.9117 148.424H28.2984V154.658H30.0211V140.74H28.2984V146.975H22.8844C22.4879 144.09 20.0406 142.148 16.7594 142.162ZM12.193 147.795C12.2066 145.389 14.107 143.625 16.7594 143.639C19.3434 143.625 21.2711 145.389 21.2711 147.795C21.2711 150.215 19.3434 151.951 16.7594 151.951C14.107 151.951 12.2066 150.215 12.193 147.795ZM14.4078 164.502H30.0211V155.943H14.4078V164.502ZM16.1031 163.08V157.365H28.3258V163.08H16.1031ZM46.0727 143.201H35.1078V158.623H46.0727V143.201ZM36.7758 157.201V144.623H44.3773V157.201H36.7758ZM50.8852 164.857H52.6078V152.033H56.7641V150.557H52.6078V140.74H50.8852V164.857ZM65.843 142.545C62.0559 142.545 59.3898 144.801 59.3898 148.123C59.3898 151.445 62.0559 153.701 65.843 153.701C69.6301 153.701 72.2824 151.445 72.2961 148.123C72.2824 144.801 69.6301 142.545 65.843 142.545ZM58.0773 157.912L58.3508 159.443C62.7395 159.443 68.7414 159.43 74.3195 158.404L74.1828 157.092C68.7824 157.912 62.5891 157.939 58.0773 157.912ZM61.0852 148.123C61.0715 145.758 63.0676 144.076 65.843 144.076C68.6047 144.076 70.6008 145.758 70.6008 148.123C70.6008 150.488 68.6047 152.184 65.843 152.17C63.0676 152.184 61.0715 150.488 61.0852 148.123ZM75.8508 164.885H77.5734V140.74H75.8508V164.885ZM96.8523 145.088V144.979H101.802V142.217H88.3211V144.979H93.325V145.088C93.3113 148.273 91.4383 151.541 87.282 152.881L89.1141 155.67C92.0398 154.672 94.0359 152.676 95.1434 150.188C96.2234 152.389 98.0965 154.139 100.763 155.014L102.677 152.389C98.616 151.09 96.8387 148.082 96.8523 145.088ZM91.2742 164.803H108.309V162.014H94.7469V156.791H91.2742V164.803ZM103.907 158.596H107.407V150.475H110.77V147.604H107.407V140.357H103.907V158.596ZM134.341 159.471H124.552V153.838H121.08V159.471H111.564V162.26H134.341V159.471ZM112.111 151.732L113.588 154.631C117.935 153.852 121.175 151.486 122.802 148.396C124.443 151.5 127.697 153.838 132.072 154.631L133.548 151.732C127.861 150.857 124.648 147.111 124.662 143.557V141.779H120.943V143.557C120.916 147.07 117.744 150.857 112.111 151.732ZM156.327 140.357H152.854V165.295H156.327V140.357ZM136.776 145.252H145.061V149.271H136.803V159.471H139.045C143.584 159.471 147.289 159.32 151.377 158.596L151.077 155.779C147.426 156.381 144.213 156.572 140.412 156.6V152.033H148.616V142.436H136.776V145.252Z"
            fill="#FEFEFE"
          />
          <path
            d="M167.498 127.681L161.391 134.371C161.166 134.62 161.046 134.948 161.057 135.284C161.068 135.619 161.209 135.936 161.45 136.164C161.569 136.277 161.709 136.364 161.862 136.422C162.016 136.479 162.179 136.505 162.343 136.498C162.506 136.49 162.667 136.45 162.816 136.38C162.965 136.309 163.1 136.209 163.211 136.086L169.333 129.396C169.446 129.274 169.534 129.13 169.592 128.974C169.651 128.818 169.678 128.652 169.674 128.485C169.669 128.318 169.632 128.155 169.565 128.004C169.497 127.852 169.401 127.716 169.282 127.604C169.162 127.487 169.021 127.396 168.865 127.337C168.71 127.278 168.544 127.251 168.378 127.258C168.212 127.265 168.048 127.306 167.897 127.379C167.746 127.451 167.61 127.554 167.498 127.681Z"
            fill="#FEFEFE"
          />
          <path
            d="M175.977 145.65L166.468 144.921C166.139 144.895 165.811 145.003 165.558 145.222C165.304 145.441 165.146 145.753 165.117 146.089C165.091 146.425 165.196 146.756 165.409 147.011C165.622 147.266 165.927 147.424 166.256 147.45L175.735 148.175C176.064 148.2 176.39 148.091 176.643 147.872C176.896 147.653 177.055 147.343 177.086 147.007C177.112 146.677 177.01 146.351 176.803 146.098C176.596 145.845 176.3 145.684 175.977 145.65Z"
            fill="#FEFEFE"
          />
          <path
            d="M178.551 132.676L163.98 139.983C163.684 140.134 163.452 140.402 163.334 140.73C163.217 141.057 163.223 141.417 163.353 141.731C163.482 142.042 163.722 142.282 164.022 142.398C164.321 142.514 164.655 142.497 164.951 142.35L179.524 135.036C179.67 134.963 179.803 134.86 179.914 134.733C180.025 134.606 180.113 134.457 180.172 134.296C180.23 134.134 180.259 133.963 180.257 133.792C180.254 133.621 180.22 133.453 180.156 133.298C180.093 133.142 180.002 133.002 179.887 132.886C179.771 132.77 179.635 132.681 179.486 132.623C179.337 132.565 179.177 132.54 179.017 132.549C178.856 132.559 178.698 132.602 178.551 132.676Z"
            fill="#FEFEFE"
          />
          <defs>
            <filter
              id="filter0_d_23_8267"
              x="7"
              y="0.521484"
              width="155.413"
              height="145.648"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_23_8267"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_23_8267"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </Logo>
      <Menu
        onClick={(e) => navigate(e.key)}
        defaultSelectedKeys={[open]}
        defaultOpenKeys={[open]}
        mode="inline"
        theme="dark"
        items={items}
      />
    </Sider>
  );
};

export default SideBar;

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
