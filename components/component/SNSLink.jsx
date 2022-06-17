import React from 'react';

export default function SNSLink(props) {
  const { backgroundColor, logoColor, onClick } = props;
  return (
    <div className="flex">
      <div
        style={{ backgroundColor: backgroundColor }}
        className=" w-[40px] h-[40px] rounded-[40px]   flex items-center justify-center mr-[20px] cursor-pointer"
        onClick={() => {
          window.open('https://brunch.co.kr/@insidebyorwell', '_blank');
          if (onClick) {
            onClick();
          }
        }}
      >
        <svg
          width="12"
          height="16"
          viewBox="0 0 12 16"
          fill={`${logoColor}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.520036 15.5977C0.488752 15.5265 0.496843 15.4812 0.52543 15.4321C0.724998 15.0896 0.92133 14.7455 1.11874 14.4019C1.25251 14.1689 1.38519 13.9348 1.52219 13.6948C1.31076 13.561 1.09069 13.4537 0.922949 13.259C0.967177 13.1808 1.01033 13.1042 1.06049 13.0157C1.28055 13.1225 1.47365 13.2779 1.7223 13.3394C1.79889 13.2115 1.87548 13.0891 1.94776 12.9634C2.22769 12.4747 2.50547 11.985 2.78487 11.4958C3.136 10.882 3.48929 10.2692 3.83988 9.65489C4.16135 9.09178 4.48336 8.52921 4.79889 7.96233C5.11443 7.39652 5.41216 6.82101 5.73525 6.25952C6.088 5.64572 6.45423 5.03892 6.8264 4.43644C7.09717 3.99793 7.38196 3.56805 7.6716 3.1414C7.99307 2.66783 8.33125 2.20505 8.69695 1.76384C8.91702 1.49793 9.14355 1.23687 9.40245 1.0071C9.7606 0.689406 10.1225 0.37549 10.5454 0.144638C10.6926 0.0642708 10.8442 -0.00746602 11.0206 0.00062459C11.1878 0.00817583 11.3199 0.119826 11.3518 0.283796C11.3863 0.462329 11.3598 0.634389 11.3027 0.803214C11.2498 0.960171 11.1948 1.11659 11.1376 1.27247C11.0238 1.58369 10.8588 1.8701 10.6872 2.15057C10.3911 2.63439 10.0249 3.06157 9.59447 3.43158C9.24118 3.73525 8.86847 4.01141 8.45315 4.22608C8.41971 4.24334 8.39112 4.26923 8.35606 4.29458C8.38411 4.35607 8.4127 4.41756 8.44075 4.47905C8.51788 4.65165 8.47041 4.82047 8.40946 4.98121C8.30051 5.26869 8.11604 5.50979 7.90623 5.73148C7.52543 6.13439 7.13492 6.52867 6.76599 6.94237C6.30536 7.45909 5.87872 8.00494 5.4812 8.57236C5.09932 9.11767 4.75251 9.68509 4.41486 10.2584C4.39113 10.2989 4.36254 10.3377 4.34528 10.3809C4.33072 10.417 4.3291 10.4586 4.32209 10.4974L4.34959 10.5114C4.39436 10.4688 4.44021 10.4273 4.4839 10.383C4.88196 9.97797 5.29026 9.58477 5.72823 9.22285C6.10795 8.90947 6.50763 8.62306 6.93481 8.3798C7.20774 8.22446 7.49576 8.0934 7.79889 8.0044C8.09717 7.91702 8.40083 7.85445 8.71529 7.88088C8.98444 7.90354 9.2374 7.9742 9.44992 8.15165C9.62737 8.29998 9.73147 8.4893 9.78918 8.71368C9.83071 8.87549 9.84042 9.03676 9.83179 9.20019C9.81669 9.48552 9.75251 9.76114 9.64517 10.026C9.36955 10.7056 8.90137 11.239 8.3593 11.7164C8.02165 12.0136 7.6565 12.2752 7.2757 12.5109C6.88357 12.7531 6.47581 12.971 6.03999 13.1279C5.7881 13.2185 5.53406 13.3027 5.28217 13.3933C4.91863 13.5244 4.54323 13.6134 4.16675 13.6937C3.90245 13.7498 3.6387 13.8108 3.36685 13.8318C3.16189 13.8474 2.95909 13.8906 2.75466 13.9154C2.66081 13.9267 2.5648 13.9321 2.47041 13.9262C2.33557 13.917 2.2428 13.9774 2.16459 14.0772C2.05995 14.211 1.9963 14.3615 1.95909 14.5265C1.93589 14.6306 1.90839 14.7353 1.86847 14.834C1.80968 14.9801 1.68724 15.0772 1.55456 15.1452C1.25197 15.3005 0.942366 15.4424 0.633844 15.5858C0.602021 15.6009 0.55995 15.5939 0.519497 15.5972L0.520036 15.5977ZM2.57775 13.4828C2.62791 13.4828 2.65812 13.4861 2.6867 13.4823C2.78001 13.4688 2.87279 13.4515 2.9661 13.4381C3.12737 13.4149 3.28918 13.396 3.45046 13.3712C3.54754 13.3561 3.64409 13.3356 3.7401 13.3129C3.85229 13.2865 3.9634 13.2552 4.07505 13.2261C4.24064 13.1824 4.40839 13.1457 4.5702 13.0929C4.80159 13.0168 5.03244 12.937 5.25682 12.8431C5.50817 12.739 5.75952 12.6317 5.99738 12.5012C6.43643 12.2595 6.83988 11.9656 7.21259 11.629C7.63762 11.2455 8.00547 10.8167 8.2881 10.3178C8.42133 10.0826 8.53945 9.84097 8.60094 9.5756C8.62036 9.49253 8.63061 9.40569 8.66027 9.32641C8.71529 9.17862 8.70504 9.02705 8.68778 8.87926C8.67753 8.79081 8.63546 8.70343 8.56319 8.63385C8.43751 8.51195 8.28487 8.47635 8.12359 8.49739C7.97095 8.5168 7.81292 8.5427 7.6743 8.60472C7.38735 8.73202 7.10202 8.86902 6.83395 9.03083C6.273 9.36902 5.7579 9.77193 5.27732 10.2158C4.7784 10.677 4.31561 11.1727 3.88034 11.6959C3.45423 12.2083 3.05833 12.7423 2.68347 13.2919C2.64571 13.3469 2.6182 13.4089 2.57721 13.4834L2.57775 13.4828ZM7.79781 4.1387C8.43158 3.70019 9.02003 3.21583 9.50925 2.61875C9.72068 2.36039 9.9154 2.0907 10.0831 1.80375C10.2595 1.5017 10.3992 1.18024 10.5217 0.852297C10.5287 0.832879 10.52 0.807529 10.5168 0.758446C9.499 1.81886 8.59555 2.93536 7.79781 4.13816V4.1387ZM6.54161 6.18833L6.57289 6.20505C6.73309 6.04216 6.89328 5.88034 7.05294 5.71691C7.28487 5.47905 7.53028 5.25467 7.73578 4.99145C7.86362 4.82749 7.88142 4.66082 7.80159 4.47366C7.76383 4.38466 7.72608 4.29296 7.7606 4.18994C7.51626 4.50224 7.31723 4.83935 7.11335 5.17322C6.91054 5.50494 6.71421 5.84043 6.54215 6.18887L6.54161 6.18833Z" />
          <path d="M1.91406 15.592C1.92161 15.5607 1.92269 15.5526 1.92539 15.5445C1.98041 15.387 2.09206 15.3477 2.25495 15.3477C5.25764 15.352 8.2598 15.3509 11.2625 15.3514C11.3337 15.3514 11.4049 15.3606 11.502 15.3671C11.4561 15.4491 11.427 15.5084 11.3909 15.5634C11.379 15.5812 11.3504 15.5947 11.3278 15.5979C11.2852 15.6039 11.2415 15.6012 11.1989 15.6012C8.16595 15.6012 5.13359 15.6012 2.10069 15.6012C2.04189 15.6012 1.98256 15.5958 1.9146 15.592H1.91406Z" />
        </svg>
      </div>
      <div
        style={{ backgroundColor: backgroundColor }}
        className=" w-[40px] h-[40px] rounded-[40px] flex items-center justify-center mr-[20px] cursor-pointer"
        onClick={() => {
          window.open('https://blog.naver.com/orwellhealth', '_blank');
          if (onClick) {
            onClick();
          }
        }}
      >
        <div className="mt-[4px]">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill={`${logoColor}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_442_12476)">
              <path d="M4.32063 6.7749C3.94563 6.7749 3.64062 7.0799 3.64062 7.4549C3.64062 7.8299 3.94563 8.1349 4.32063 8.1349C4.69563 8.1349 5.00062 7.8299 5.00062 7.4549C5.00062 7.0799 4.69563 6.7749 4.32063 6.7749Z" />
              <path d="M11.0514 6.7002C10.6464 6.7002 10.3164 7.0302 10.3164 7.4352C10.3164 7.8402 10.6464 8.1702 11.0514 8.1702C11.4564 8.1702 11.7864 7.8402 11.7864 7.4352C11.7864 7.0302 11.4564 6.7002 11.0514 6.7002Z" />
              <path d="M17.145 0H2.645C1.185 0 0 1.185 0 2.645V11.25C0 12.71 1.185 13.895 2.645 13.895H7.765L9.505 18C9.505 18 9.625 18.355 9.915 18.355C10.205 18.355 10.325 18 10.325 18L12.065 13.895H17.14C18.6 13.895 19.785 12.71 19.785 11.25V2.645C19.785 1.185 18.6 0 17.14 0H17.145ZM6.22 7.605C6.21 9.18 4.585 9.225 4.585 9.225C3.955 9.225 3.6 8.81 3.6 8.81V9.095H2.415V4.205C2.415 4.205 2.41 4.205 2.415 4.205C2.49 4.22 3.6 4.205 3.6 4.205V6.075C3.88 5.6 4.685 5.61 4.685 5.61C6.44 5.775 6.22 7.61 6.22 7.61V7.605ZM8.305 5.755V9.1H7.145V5.79C7.145 5.34 6.585 5.215 6.585 5.215V4.045C8.435 4.12 8.305 5.755 8.305 5.755ZM11.055 9.225C9.98 9.225 9.11 8.425 9.11 7.435C9.11 6.445 9.98 5.645 11.055 5.645C12.13 5.645 13 6.445 13 7.435C13 8.425 12.13 9.225 11.055 9.225ZM17.405 9.225C17.405 9.225 17.42 10.925 15.695 10.925H15.17V9.825H15.485C15.485 9.825 16.21 9.89 16.2 8.775C16.2 8.775 16.06 9.23 15.04 9.23C15.04 9.23 13.6 9.125 13.6 7.72V7.185C13.6 7.185 13.635 5.725 15.215 5.61C15.215 5.61 15.84 5.545 16.225 6.06V5.7H17.4V9.23L17.405 9.225Z" />
              <path d="M15.5548 6.71973C15.1598 6.71973 14.8398 7.03973 14.8398 7.43973C14.8398 7.83973 15.1598 8.15473 15.5548 8.15473C15.9498 8.15473 16.2698 7.83473 16.2698 7.43973C16.2698 7.04473 15.9498 6.71973 15.5548 6.71973Z" />
            </g>
            <defs>
              <clipPath id="clip0_442_12476">
                <rect width="19.79" height="18.355" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div
        style={{ backgroundColor: backgroundColor }}
        className=" w-[40px] h-[40px] rounded-[40px]  flex items-center justify-center mr-[20px] cursor-pointer"
        onClick={() => {
          window.open('https://www.instagram.com/inside.im/', '_blank');
          if (onClick) {
            onClick();
          }
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill={`${logoColor}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.8038 1.56358e-07H5.19493C3.81715 1.56358e-07 2.4958 0.547322 1.52156 1.52156C0.547322 2.4958 1.56358e-07 3.81715 1.56358e-07 5.19493V12.8038C-0.000167242 13.4861 0.13408 14.1618 0.395075 14.7922C0.65607 15.4226 1.0387 15.9955 1.52111 16.478C2.00352 16.9605 2.57626 17.3433 3.20662 17.6044C3.83698 17.8656 4.51261 18 5.19493 18H12.8038C13.4862 18 14.1619 17.8656 14.7923 17.6045C15.4227 17.3433 15.9956 16.9606 16.4781 16.4781C16.9606 15.9956 17.3433 15.4227 17.6045 14.7923C17.8656 14.1619 18 13.4862 18 12.8038V5.19493C18 4.51261 17.8656 3.83698 17.6044 3.20662C17.3433 2.57626 16.9605 2.00352 16.478 1.52111C15.9955 1.0387 15.4226 0.65607 14.7922 0.395075C14.1618 0.13408 13.4861 -0.000167242 12.8038 1.56358e-07ZM16.3419 12.9376C16.342 13.3906 16.2529 13.8391 16.0797 14.2576C15.9064 14.6761 15.6524 15.0564 15.3321 15.3767C15.0118 15.697 14.6315 15.951 14.213 16.1243C13.7945 16.2975 13.346 16.3866 12.893 16.3865H5.10571C4.65276 16.3866 4.20421 16.2975 3.7857 16.1243C3.36719 15.951 2.98693 15.697 2.66664 15.3767C2.34635 15.0564 2.09232 14.6761 1.91906 14.2576C1.7458 13.8391 1.6567 13.3906 1.65687 12.9376V5.1516C1.6567 4.69864 1.7458 4.25009 1.91906 3.83158C2.09232 3.41308 2.34635 3.03281 2.66664 2.71252C2.98693 2.39224 3.36719 2.1382 3.7857 1.96494C4.20421 1.79168 4.65276 1.70259 5.10571 1.70275H12.893C13.346 1.70259 13.7945 1.79168 14.213 1.96494C14.6315 2.1382 15.0118 2.39224 15.3321 2.71252C15.6524 3.03281 15.9064 3.41308 16.0797 3.83158C16.2529 4.25009 16.342 4.69864 16.3419 5.1516V12.9376Z" />
          <path d="M8.99947 4.37415C8.07578 4.37415 7.17282 4.64801 6.40475 5.1611C5.63667 5.6742 5.03796 6.4035 4.6843 7.25681C4.33065 8.11012 4.23792 9.04913 4.41785 9.95513C4.59777 10.8611 5.04227 11.6935 5.69515 12.3469C6.34804 13.0003 7.17999 13.4455 8.08585 13.6261C8.9917 13.8068 9.93078 13.7148 10.7844 13.3619C11.638 13.0089 12.3678 12.4108 12.8815 11.6432C13.3952 10.8755 13.6698 9.97277 13.6706 9.04907C13.6711 8.43533 13.5506 7.82751 13.3161 7.26035C13.0816 6.69318 12.7376 6.17779 12.3038 5.74363C11.87 5.30947 11.3549 4.96506 10.7879 4.73008C10.2209 4.49509 9.61321 4.37415 8.99947 4.37415ZM8.99947 12.0722C8.40033 12.0722 7.81464 11.8945 7.31654 11.5615C6.81844 11.2285 6.4303 10.7553 6.20125 10.2017C5.9722 9.64802 5.91253 9.03888 6.02979 8.45132C6.14705 7.86375 6.43597 7.32418 6.85999 6.90088C7.284 6.47757 7.82406 6.18956 8.41182 6.07329C8.99958 5.95702 9.60862 6.01772 10.1619 6.2477C10.7151 6.47768 11.1877 6.86662 11.5199 7.36528C11.852 7.86394 12.0287 8.44993 12.0277 9.04907C12.0264 9.85133 11.7067 10.6203 11.139 11.1871C10.5712 11.7539 9.80173 12.0722 8.99947 12.0722Z" />
          <path d="M13.8267 5.28527C14.4278 5.28527 14.9152 4.79796 14.9152 4.19684C14.9152 3.59571 14.4278 3.1084 13.8267 3.1084C13.2256 3.1084 12.7383 3.59571 12.7383 4.19684C12.7383 4.79796 13.2256 5.28527 13.8267 5.28527Z" />
        </svg>
      </div>
      <div
        style={{ backgroundColor: backgroundColor }}
        className=" w-[40px] h-[40px] rounded-[40px]  flex items-center justify-center cursor-pointer"
        onClick={() => {
          window.open('https://medium.com/inside', '_blank');
          if (onClick) {
            onClick();
          }
        }}
      >
        <svg
          width="22"
          height="13"
          viewBox="0 0 22 13"
          fill={`${logoColor}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_442_12491)">
            <path d="M12.4093 6.24735C12.4093 9.69755 9.63136 12.4945 6.20477 12.4945C2.77817 12.4945 0 9.69755 0 6.24735C0 2.79714 2.77796 0 6.20477 0C9.63157 0 12.4093 2.79714 12.4093 6.24735Z" />
            <path d="M19.2165 6.24712C19.2165 9.49474 17.8275 12.1285 16.1141 12.1285C14.4007 12.1285 13.0117 9.49474 13.0117 6.24712C13.0117 2.99949 14.4005 0.365723 16.1139 0.365723C17.8273 0.365723 19.2163 2.99865 19.2163 6.24712" />
            <path d="M22.0004 6.24732C22.0004 9.15639 21.5119 11.5161 20.9093 11.5161C20.3066 11.5161 19.8184 9.15703 19.8184 6.24732C19.8184 3.33761 20.3068 0.978516 20.9093 0.978516C21.5117 0.978516 22.0004 3.3374 22.0004 6.24732Z" />
          </g>
          <defs>
            <clipPath id="clip0_442_12491">
              <rect width="22" height="12.4945" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
