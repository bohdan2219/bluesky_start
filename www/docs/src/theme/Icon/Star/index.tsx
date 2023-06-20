import React from "react"
import { IconProps } from ".."

const IconStar: React.FC<IconProps> = ({ iconColorClassName, ...props }) => {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.56687 2.91569C9.60212 2.82971 9.66214 2.75617 9.73931 2.7044C9.81647 2.65264 9.90729 2.625 10.0002 2.625C10.0931 2.625 10.1839 2.65264 10.2611 2.7044C10.3383 2.75617 10.3983 2.82971 10.4335 2.91569L12.2044 7.17485C12.2375 7.25455 12.292 7.32356 12.3619 7.37428C12.4317 7.425 12.5142 7.45548 12.6002 7.46235L17.1985 7.83069C17.6144 7.86402 17.7827 8.38319 17.466 8.65402L13.9627 11.6557C13.8973 11.7117 13.8485 11.7846 13.8217 11.8665C13.795 11.9484 13.7913 12.036 13.811 12.1199L14.8819 16.6074C14.9034 16.6974 14.8978 16.7918 14.8657 16.8786C14.8336 16.9654 14.7765 17.0408 14.7016 17.0952C14.6267 17.1496 14.5373 17.1806 14.4448 17.1842C14.3523 17.1879 14.2608 17.164 14.1819 17.1157L10.2444 14.7115C10.1708 14.6667 10.0863 14.643 10.0002 14.643C9.91407 14.643 9.82959 14.6667 9.75604 14.7115L5.81854 17.1165C5.73959 17.1648 5.64808 17.1887 5.55559 17.185C5.46309 17.1814 5.37375 17.1504 5.29885 17.096C5.22394 17.0416 5.16684 16.9663 5.13475 16.8794C5.10266 16.7926 5.09702 16.6982 5.11854 16.6082L6.18937 12.1199C6.20923 12.036 6.20558 11.9483 6.17882 11.8664C6.15207 11.7845 6.10324 11.7116 6.03771 11.6557L2.53437 8.65402C2.46422 8.5937 2.41347 8.51397 2.3885 8.42488C2.36353 8.33579 2.36546 8.24131 2.39405 8.15331C2.42264 8.06531 2.47661 7.98773 2.54918 7.93033C2.62174 7.87292 2.70966 7.83826 2.80187 7.83069L7.40021 7.46235C7.48625 7.45548 7.56873 7.425 7.63856 7.37428C7.7084 7.32356 7.76289 7.25455 7.79604 7.17485L9.56687 2.91652V2.91569Z"
        className={
          iconColorClassName ||
          "tw-stroke-medusa-icon-subtle dark:tw-stroke-medusa-icon-subtle"
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconStar
