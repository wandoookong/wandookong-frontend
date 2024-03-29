import { useNavigate } from "react-router-dom";
import CommonModalHeader from "../../components/header/commonModalHeader";
import styled from "styled-components";
import { colors } from "../../styles/colors";

export default function ConditionTerms() {
  const navigate = useNavigate();
  return (
    <>
      <CommonModalHeader onClick={() => navigate(-1)} />
      <Container>
        <h1>서비스 이용약관</h1>
        <h2>제1조 (목적)</h2>
        <p>
          완두콩의 서비스를 이용해주셔서 감사합니다. 이 약관은 완두콩(이하 “회사”)가 운영하는 인터넷 사이트 완두콩(이하
          “사이트”)를 이용함에 있어 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
        </p>
        <h2>제 2조 (용어의 정의)</h2>
        <ol className="number-list-wrapper">
          <li>
            <p>회사가 운영하는 사이트는 아래와 같습니다.</p>
            <ul className="disc-list-wrapper">
              <li className="disc-list-item-wrapper">
                <p>사이트 이름: '완두콩’</p>
              </li>
              <li className="disc-list-item-wrapper">
                <p>사이트 주소: wandookongproject.com</p>
              </li>
            </ul>
          </li>
          <li>
            <p>이용자: 사이트에 접속하여 이 약관에 따라 “사이트”를 사용하는 회원 및 비회원을 말합니다.</p>
          </li>
          <li>
            <p>
              회원: ”사이트”에 회원등록을 한 자로서, 사이트에서 제공하는 서비스를 이용하기 위해 가입신청을 하여
              지속적으로 “사이트”가 제공하는 서비스를 이용할 수 있고, 약관에 따른 권리와 의무를 갖는 자를 말합니다.
            </p>
          </li>
          <li>
            <p>비회원: 회원으로 가입하지 않고 “사이트”가 제공하는 서비스를 이용하는 자를 말합니다.</p>
          </li>
          <li>
            <p>서비스: 회사가 제공하는 서비스 일체를 의미합니다.</p>
          </li>
        </ol>
        <h2>제 3조 (약관 동의 명시와 설명 및 개정)</h2>
        <ol className="number-list-wrapper">
          <li>
            <p>회사는 이 약관을 이용자가 알 수 있도록 웹사이트를 통해 이용자에게 고지함으로써 효력이 발생합니다.</p>
          </li>
          <li>
            <p>
              이 약관은 “사이트”를 이용하고자 하는 모든 이용자에 대하여 그 효력이 발생합니다. 관계법령에 위배되지 않는
              범위 안에서 개정이 될 수 있으며, 이는 웹사이트 게시 등 기타 수단으로 게시하여 효력을 인정 받습니다.
            </p>
          </li>
          <li>
            <p>
              이용자의 이 약관에 대한 동의는 사이트나 모바일 웹사이트, 어플리케이션 등을 방문하여 약관의 변경 사항을
              확인하는 것에 대한 동의를 포함합니다.
            </p>
          </li>
          <li>
            <p>
              이용자는 개정된 약관에 동의하지 않을 경우 회사에 계약해지 및 이용정지를 요청할 수 있으며, 계속 서비스를
              사용할 경우 변경된 약관에 동의하는 것으로 간주됩니다.
            </p>
          </li>
        </ol>
        <h2>제 4조 (약관 외 준칙)</h2>
        <p>
          이 약관에서 정하지 아니한 사항에 관하여는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한
          법률」, 「정보통신망이용촉진 및 정보보호 등에 관한 법률」, 「콘텐츠산업진흥법」 등 관련 법령 및 상관례에
          따릅니다.
        </p>
        <h2>제 5조 (이용 계약의 성립)</h2>
        <ol className="number-list-wrapper">
          <li>
            <p>
              서비스 이용계약은 이용자가 각종 정보 입력을 완료하고 이 약관 및 개인정보 수집 및 이용에 동의하면 그
              이용신청에 대한 회사의 이용승낙으로 성립합니다. 이용자의 서비스 이용신청 완료 후 서비스가 정상적으로
              이용되는 경우에는 이용이 승낙된 것으로 간주됩니다.
            </p>
          </li>
          <li>
            <p>
              이용자는 서비스 이용과정에서 타인의 개인정보를 도용하는 경우 이 약관에 의한 이용자의 권리를 주장할 수
              없으며, 회사는 이용계약을 취소하거나 해지할 수 있습니다. 이용자가 플랫폼사업자에게 개인정보를 제공하고
              플랫폼사업자를 통해 서비스를 이용하는 경우에도 동일하게 간주됩니다.
            </p>
          </li>
          <li>
            <p>
              회사는 이용자의 상태와 이용기간, 이용횟수, 서비스 접근방식 등에 따라 합리적인 기준을 통해 서비스 범위에
              차등을 둘 수 있으며, 이용자는 상기 내용에 따라 서비스 이용에 제약을 받을 수 있습니다.
            </p>
          </li>
          <li>
            <p>
              회사는 1항의 방법으로 서비스 이용을 신청한 자가 아래의 각 호에 해당하는 경우 서비스 이용신청 승낙을 유보
              또는 거부할 수 있습니다.
            </p>
            <ol className="alphabet-list-wrapper">
              <li>
                <p>타인의 정보 도용 등 등록내용을 허위로 기재한 사실이 있는 경우</p>
              </li>
              <li>
                <p>
                  이용자가 “사이트” 약관 및 서비스 이용에 관한 관계법령을 위반하여 “사이트”에서 제공하는 서비스의
                  이용자격을 상실한 경우가 있는 경우
                </p>
              </li>
              <li>
                <p>회사가 필수적으로 입력을 요청한 부분을 기재하지 않은 경우</p>
              </li>
              <li>
                <p>만 14세 미만인 자</p>
              </li>
              <li>
                <p>사회질서 및 미풍양속을 문란하게 하는 자</p>
              </li>
              <li>
                <p>부정한 용도로 서비스를 사용하고자 하는 경우</p>
              </li>
              <li>
                <p>기타 회사의 여건상 이용승낙이 곤란하거나 가입결격 사유에 해당하는 자</p>
              </li>
            </ol>
          </li>
          <li>
            <p>이용 신청 계약 성립 시점은 회사의 이용신청 승낙이 이용자에게 도달한 시점을 기준으로 합니다.</p>
          </li>
        </ol>
        <h2>제 6조 (서비스의 종류 및 범위)</h2>
        <ol className="number-list-wrapper">
          <li>
            <p>이용자는 무료로 “사이트” 이용을 신청할 수 있습니다.</p>
          </li>
          <li>
            <p>
              “사이트”는 연중무휴, 365일 24시간 제공을 원칙으로 하되, 이용자의 접속 폭주와 기타 회사 사정에 의해 지연될
              수 있으며 이에 대해 회사는 손해배상 등의 책임을 부담하지 않습니다.
            </p>
          </li>
          <li>
            <p>
              회사는 “사이트”의 원활한 서비스 제공을 위하여 고객센터를 운영하고 있습니다. 웹 사이트 내 문의 접수를 통해
              신고가 접수되고, 신고된 이용자의 행위가 서비스의 질서를 어지럽혔거나, 타인의 권리를 침해한다고 판단 될
              경우 해당 이용자에 대하여 이용제한, 이용 영구불능조치, 법적책임 추궁 등의 조치를 취할 수 있습니다.
            </p>
          </li>
        </ol>
        <h2>제 7조 (게시물에 대한 저작권)</h2>
        <ol className="number-list-wrapper">
          <li>
            <p>
              회원이 서비스 내에 작성한 텍스트 등의 기타 정보(이하 “게시물”)에 대한 책임 및 권리는 게시물을 등록한
              회원에게 있습니다.
            </p>
          </li>
          <li>
            <p>
              회원 또는 회사가 서비스 내에 게시한 게시물은 저작권법에 의한 보호를 받으며, 게시물의 저작권은 해당
              게시물의 작성자에게 귀속합니다.
            </p>
          </li>
          <li>
            <p>
              회원은 다음 각 호에 해당하는 범위 내에서 회원이 등록한 게시물을 회사가 사용하고, 본질적인 내용에 변경을
              가하지 않는 범위 내에서 수정, 편집할 것을 허락합니다.
            </p>
            <ol className="alphabet-list-wrapper">
              <li>
                <p>서비스 내에서 게시물의 복제, 전송, 전시, 배포를 위해 수정, 사용하는 것</p>
              </li>
              <li>
                <p>공개 페이지를 캡처한 화면을 마케팅 용도로 사용하는 것</p>
              </li>
              <li>
                <p>본 항에 따른 복제, 전송, 전시, 배포의 범위에는 회사가 운영하는 관련 사이트의 서비스가 포함됩니다.</p>
              </li>
            </ol>
          </li>
          <li>
            <p>
              회사는 3항 이외의 방법으로 회원의 게시물을 이용하고자 하는 경우 E-mail 또는 기타 서비스 내에서 회사가
              제공하는 방식으로 사전에 회원에게 동의를 얻어야 합니다.
            </p>
          </li>
          <li>
            <p>
              회원과의 이용계약이 해지 또는 종료되더라도, 본인이 생성한 게시물은 자동적으로 삭제되지 않습니다. 게시물의
              삭제를 원하는 회원은 반드시 회원탈퇴 이전에 자신의 게시물을 삭제하거나 회사에 삭제를 요청하여야 합니다.
            </p>
          </li>
          <li>
            <p>
              게시물이 제 3자에 의하여 보관되거나 무단복제 등을 통하여 복제됨으로써 해당 게시물이 삭제되지 않고 재
              게시된 경우에 대하여 회사는 책임을 지지 않습니다.
            </p>
          </li>
          <li>
            <p>
              회사는 회사의 합병, 영업양도, 회사가 운영하는 서비스 제품 간의 통합, 서비스 개편 등의 사유로 원래의
              게시물의 내용을 변경하지 않고 게시물의 게시 위치를 변경할 수 있습니다.
            </p>
          </li>
        </ol>
        <h2>제 8조 (회사의 의무)</h2>
        <ol className="number-list-wrapper">
          <li>
            <p>회사는 이 약관과 관련법령에 따라 지속적이고 안정적인 서비스를 제공하는데 최우선의 노력을 다합니다.</p>
          </li>
          <li>
            <p>
              회사는 서비스에 관한 회원의 문제제기나 불편사항 신고가 정당하다고 판단되는 경우 우선적으로 이를 해결하기
              위해 노력하며, 신속한 해결이 곤란한 경우에는 회원에게 그 사유와 처리절차를 안내합니다.
            </p>
          </li>
          <li>
            <p>
              회사는 회사가 정한 이용약관 및 운영정책 혹은 법령을 위반하는 이용자들을 강제 이용 중단 조치할 수 있습니다.
            </p>
          </li>
          <li>
            <p>
              서비스 내에서 회원은 물론 비회원 이용자의 정보 게재에 따른 문제가 발생하여 문의접수 시, 최대한 빠르게
              문의내용을 파악하여 대응할 의무가 있습니다.
            </p>
          </li>
          <li>
            <p>
              회사는 회원의 서비스 이용과 관련한 자료를 수사기관이 수사목적으로 요청하거나 기타 공공기관이 관련 법률에
              따른 절차를 통해 요청하는 경우 회원의 동의 없이 해당 기관에 제공할 수 있습니다.
            </p>
          </li>
          <li>
            <p>
              회사는 회원의 서비스 이용과 관련한 자료를 통계자료 작성, 서비스의 개선, 신규서비스의 개발 등의 목적으로
              활용할 수 있습니다.
            </p>
          </li>
          <li>
            <p>
              회사는 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관계법령에 따라 이용자가 서비스 이용 신청 시
              기록한 개인정보, 이후에 추가로 기록한 개인정보 및 서비스 이용 중 생성되는 개인정보를 보호하여야 합니다.
            </p>
          </li>
        </ol>
        <h2>제 9조 (회원의 의무)</h2>
        <ol className="number-list-wrapper">
          <li>
            <p>ID와 비밀번호에 관한 관리책임은 전적으로 회원에게 있습니다.</p>
          </li>
          <li>
            <p>회원은 자신의 ID 및 비밀번호를 제3자에게 이용하게 해서는 안됩니다.</p>
          </li>
          <li>
            <p>
              회원이 자신의 ID 및 비밀번호를 도난 당하거나 제3자가 사용하고 있음을 인지한 경우에는 바로 회사에 통보하고
              회사의 안내가 있는 경우에는 그에 따라야 합니다.
            </p>
          </li>
          <li>
            <p>회원이 본조에 따른 의무를 소홀히 하여 발생하는 모든 불이익에 대해 회사는 일체 책임을 지지 않습니다.</p>
          </li>
        </ol>
        <h2>제 10조 (이용자의 금지행위)</h2>
        <ol className="number-list-wrapper">
          <li>
            <p>이용자는 아래 각호의 행위를 하여서는 안 됩니다.</p>
            <ol className="alphabet-list-wrapper">
              <li>
                <p>이 약관, 운영정책, 관련법령 등을 위반하는 행위</p>
              </li>
              <li>
                <p>회사 또는 제3자의 지식재산권 등 권리를 침해하는 행위</p>
              </li>
              <li>
                <p>“사이트”의 이용자 정보를 부정하게 취득하는 행위</p>
              </li>
              <li>
                <p>“사이트”를 회사가 지정하지 않은 방법으로 접근하여 서비스 혹은 서비스 내 데이터를 이용/활용한 행위</p>
              </li>
              <li>
                <p>게시물 작성 시, 비회원 이용자의 정보를 당사자의 동의 없이 게재하는 경우</p>
              </li>
              <li>
                <p>타인의 개인정보(휴대전화번호, 이름 등)을 도용하는 행위</p>
              </li>
              <li>
                <p>개인정보를 허위 또는 타인의 것으로 등록하는 행위</p>
              </li>
              <li>
                <p>외설 또는 폭력적인 메시지나 기타 공서양속에 반하는 정보를 서비스 내에 공개 또는 게시하는 행위</p>
              </li>
              <li>
                <p>타 이용자에 대한 비방 또는 인격모독을 하거나 이를 작성 및 유포하는 행위</p>
              </li>
              <li>
                <p>사이트 내에서 불법적으로 물건을 판매하거나 상행위를 하는 행위</p>
              </li>
              <li>
                <p>음란물 및 동영상을 게시하는 행위</p>
              </li>
              <li>
                <p>사이트 운영업무를 방해하는 행위 또는 서비스에 대한 허위 사실을 유포하는 등의 행위</p>
              </li>
              <li>
                <p>서비스 제공에 유해한 게시물을 작성하는 등 회사가 정한 이용정책을 위반하는 행위</p>
              </li>
            </ol>
          </li>
          <li>
            <p>
              기타 서비스 및 제반 설비를 이용하여 범죄 또는 불법행위를 하거나, 이외에 운영자의 판단하에 이용에
              부적절하다고 여겨지는 행위 이상 위 2항 각 호 해당 사항에 명시한 내용을 위반한 이용자는 강제이용 중단 및
              영구이용 중단처리될 수 있으며 민형사상의 책임을 지게 됩니다.
            </p>
          </li>
          <li>
            <p>
              본 약관을 위반하거나, 기타 대한민국 관계 법령에 위반하는 행위에 대해서는 경고 없이 이용자의 권한이
              박탈되며, 이에 대해 회사는 이용자에게 어떠한 보상도 하지 않습니다.
            </p>
          </li>
        </ol>
        <h2>제 11조 (계약의 종료)</h2>
        <p>완두콩은 다음과 같은 조건을 계약의 종료 조건으로 인정합니다.</p>
        <ol className="number-list-wrapper">
          <li>
            <p>
              이용자의 자의에 의해 회사가 제공하는 서비스 내의 계정삭제 (탈퇴) 기능을 통하여 계정삭제 신청을 할 경우
            </p>
          </li>
          <li>
            <p>
              이용자의 의무를 성실히 이행하지 않거나, 약관에서 정한 사항 및 정책과 완두콩 운영정책에 위배되는 행위를 한
              이용자는 사전 고지 없이 강제 이용 중지 및 영구 이용정지 처리될 수 있습니다.
            </p>
          </li>
          <li>
            <p>이용자가 10조 2항에 해당하는 경우, 회사에 의해 계약이 종료될 수 있습니다.</p>
          </li>
          <li>
            <p>
              이용계약을 해지 또는 회원탈퇴하는 경우, 회사는 개인정보처리방침에 따라 이용자의 정보를 보유하는 경우를
              제외하고, 이용자가 회원가입 시 제공했던 정보를 삭제합니다. 단, 본인이 작성한 메시지는 삭제되지 않습니다.
            </p>
          </li>
        </ol>
        <h2>제 12조 (서비스의 중단)</h2>
        <ol className="number-list-wrapper">
          <li>
            <p>
              회사는 통신, 전력 등의 공급이 중단되는 불가피한 경우는 물론 정보통신설비의 보수점검, 증설, 교체, 이전 등의
              유지 관리 업무의 수행, 기타 경영상의 사정 등으로 인해 필요한 경우 7일 이전에 공지 후 서비스의 제공을
              일시적으로 중단할 수 있습니다. 다만, 불가피하게 사전 공지를 할 수 없는 경우 회사는 사후 공지할 수
              있습니다.
            </p>
          </li>
          <li>
            <p>
              회사는 천재지변, 전쟁, 폭동, 테러, 해킹, DDOS, 기간통신사업자 등 제3자의 귀책사유, 기타 기술적 장애 등으로
              서비스가 중단된 경우 회원에게 즉시 이러한 사실을 공지하되 정보통신설비의 작동불능 등의 사정으로 인해
              사전공지가 불가능한 경우에는 이러한 사정이 해소된 이후 즉시 공지합니다. 회사는 본항에 따른 서비스 중단에
              대해 어떠한 책임도 지지 않습니다.
            </p>
          </li>
          <li>
            <p>
              회사는 제1항에 따른 서비스 중단에 대해 고의 또는 중대한 과실이 없는 경우 회원에 대하여 손해배상의 책임을
              부담하지 않습니다.
            </p>
          </li>
        </ol>
        <h2>제 13조 (손해배상)</h2>
        <p>
          이용자가 서비스를 이용함에 있어 행한 불법적 행위나 본 약관의 규정을 위반함으로 인하여 회사에 손해가 발생하거나
          제3자로부터 회사가 손해배상 청구 또는 소송을 비롯한 각종 이의제기를 받는 경우 이용자는 회사에 발생하는 모든
          손해를 배상하여야 합니다.
        </p>
        <h2>제 14조 (면책조항)</h2>
        <p>
          완두콩은 본 서비스(모든 게시물을 포함함)에 사실상 또는 법률상의 하자(안전성, 신뢰성, 정확성, 완전성, 유효성,
          특정 목적과 부합 여부, 보안 등에 관련된 결함, 오류와 버그, 권리 침해 등을 포함함)가 없음을 명시적으로도
          암묵적으로도 보증하지 않습니다.
        </p>
        <ol className="number-list-wrapper">
          <li>
            <p>
              회사는 운영상 또는 기술상의 필요에 따라 제공하고 있는 서비스를 변경할 수 있습니다. 변경될 서비스의 내용 및
              제공일자 등에 대해서는 회사가 운영하는 웹사이트에 게시하거나 E-mail, SMS, 푸시 알림 등으로 이용자에게
              통지합니다. 단, 회사가 사전에 통지할 수 없는 치명적인 버그 발생, 서버기기결함, 긴급 보안문제 해결 등의
              부득이한 사정이 있는 경우에는 사후에 통지할 수 있습니다.
            </p>
          </li>
          <li>
            <p>회사는 다음 각호에 해당하는 경우 서비스의 전부 또는 일부를 제한하거나 중지할 수 있습니다.</p>
            <ol className="alphabet-list-wrapper">
              <li>
                <p>전시, 사변, 천재지변 또는 국가 비상사태 등 불가항력적인 사유가 있는 경우</p>
              </li>
              <li>
                <p>정전, 제반설비의 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우</p>
              </li>
              <li>
                <p>서비스용 설비의 보수 또는 공사 등 부득이한 사유가 있는 경우</p>
              </li>
              <li>
                <p>회사의 제반 사정으로 서비스를 할 수 없는 경우</p>
              </li>
            </ol>
          </li>
          <li>
            <p>
              회사는 서비스 개편이나 운영상 또는 회사의 긴박한 상황 등에 의해 서비스 전부나 일부를 장기간 중단(또는
              종료)할 필요가 있는 경우 최소 7일 전에 웹사이트에 이를 공지하고 서비스의 제공을 중단할 수 있습니다. 무료로
              제공된 서비스의 경우, 서비스 중단 공지 시 공지된 서비스의 종료일까지를 이용기간으로 봅니다.
            </p>
          </li>
          <li>
            <p>
              회사는 기간통신 회사가 전기통신 서비스를 중지하거나 정상적으로 운영을 하지 못해 발생하는 문제에 대하여
              책임이 면제됩니다.
            </p>
          </li>
          <li>
            <p>회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대한 책임을 지지 않습니다.</p>
          </li>
          <li>
            <p>
              회사는 이용자가 회사의 서비스 제공으로부터 기대되는 이익을 얻지 못하였거나, 서비스 내용을 숙지하지 못하여
              발생하는 손해 등에 대해서는 책임을 지지 않습니다.
            </p>
          </li>
          <li>
            <p>
              회사는 이용자가 작성한 게시물에 대해 신뢰도 및 정확도 대한 책임을 지지 않으며 이로 인해 발생한 정신적,
              물질적 손해 등의 피해에 대한 책임이 면제됩니다.
            </p>
          </li>
          <li>
            <p>
              회사의 서비스 내 게시물의 진실성이나 명예훼손, 저작권 위반과 같은 문제가 발생하여 벌어지는 민/형사 상의
              모든 책임은 이용자 본인에게 있습니다.
            </p>
          </li>
          <li>
            <p>
              회사는 이용자의 서비스 이용에 필요한 서버의 보수로 인한 교체, 일시 정지, 개편 작업이 발생할 경우에는
              서비스 중지에 대한 책임이 면제됩니다. 이용자가 서비스 중인 웹사이트의 공지사항 등을 확인해야 하는 의무를
              게을리하여 그 내용을 숙지하지 못하여 발생하는 문제의 책임은 이용자 본인에게 있습니다.
            </p>
          </li>
          <li>
            <p>
              이용자간 혹은 이용자와 제3자 상호간의 온라인 및 오프라인상에서 이루어진 행위에 대해서는 이용자 본인에게
              책임이 있습니다. 단, 회사는 이에 대한 수사기관의 수사, 재판, 분쟁 등이 발생한 경우 이에 대한 최대한의
              도움을 지원합니다.
            </p>
          </li>
          <li>
            <p>
              회사의 서비스에 배너광고 등으로 게재된 제3의 사이트 주소로 링크된 곳에서 발생하는 현상에 대해 회사는
              어떠한 통제권도 가지지 않으며 해당 사이트의 운영방침에 따릅니다. 이로 인하여 발생하는 문제에 대한 책임은
              해당 사이트와 이용자 본인에게 있습니다.
            </p>
          </li>
          <li>
            <p>
              회사는 이용자가 본 약관 규정을 위배하여 발생한 손실에 대해서는 책임을 지지 않습니다. 이용자가 서비스에
              업로드한 자료에 대해 발생되는 모든 문제에 대해서는 회사의 책임이 면제 됩니다.
            </p>
          </li>
          <li>
            <p>
              회사의 동의 없이 제3자에게 이용자의 권한을 판매 및 양도할 경우 이용자 자격 박탈 및 민사청구 및 형사상의
              고소 또는 고발이 가능합니다. 또한 이로 인한 모든 피해는 불법으로 이용자 권한을 판매/양도한 이용자에게
              귀속됩니다.
            </p>
          </li>
          <li>
            <p>
              이용자가 작성한 정보가 본인이 확인 가능한 이메일이 아니거나 연락처 갱신을 하지 않아 회사가 전달하는
              공지사항이 그 전달방법인 이메일 등을 통해 전달되지 못하여 발생하는 손해에 대한 책임은 이용자 본인에게
              있습니다.
            </p>
          </li>
        </ol>
        <h2>제 15조 (고지의 의무)</h2>
        <ol className="number-list-wrapper">
          <li>
            <p>
              회사가 이용자에 대하여 고지를 하는 경우 서비스 내 전달 기능 또는 웹사이트에 게시 또는 이용자가 회사에
              등록한 이메일 주소로 할 수 있습니다.
            </p>
          </li>
          <li>
            <p>
              회사는 이용자가 이메일 또는 연락처 수신이 곤란한 경우나 불특정다수 이용자에게 통지를 해야 할 경우 서비스
              내 공지사항 등에 게시함으로써 개별 통지에 갈음할 수 있습니다.
            </p>
          </li>
          <li>
            <p>
              현 이용약관의 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일 전부터 사이트내 안내 페이지를 통해
              고지할 것입니다.
            </p>
          </li>
        </ol>
        <h2>부칙</h2>
        <p>본 약관은 2022년 12월 30일부터 시행합니다.</p>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 80px;
  padding: 0 24px 80px;

  h1 {
    margin-bottom: 44px;
    font-size: 28px;
    font-weight: 700;
    color: ${colors.grey900};
  }

  h2 {
    margin: 32px 0 20px;
    font-size: 20px;
    font-weight: 700;
    color: ${colors.grey900};
  }

  ol.number-list-wrapper {
    list-style-type: decimal;
    padding-left: 16px;

    li {
      padding-left: 12px;
    }
  }

  ol.alphabet-list-wrapper {
    list-style: lower-latin;
    padding-left: 15px;
  }

  ul.disc-list-wrapper {
    list-style: disc;
    padding-left: 16px;

    li.disc-list-item-wrapper {
      padding: 0;
      p {
        margin-top: 8px;
      }
    }
  }

  p {
    margin-top: 12px;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    color: ${colors.grey900};
  }
`;
