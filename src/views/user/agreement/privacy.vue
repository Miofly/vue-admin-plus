<script lang="ts" setup>
import { LINK_HOME } from '@/router/constants';
import setting from '../../../setting';
import SlideLeftBar from './../components/slide-left-bar.vue';

interface Props {
  isInnerPage?: boolean
}

const {
  isInnerPage
} = defineProps<Props>();

const headerProps = computed(() => {
  return {
    logoCfg: {
      logo: setting.logo.src,
      title: setting.logo.title,
      jumpPath: LINK_HOME
    }
  };
});
</script>

<template>
  <div class="outWrapper">
    <div class="mainContent">
      <slide-left-bar v-if="!isInnerPage" :tabindex="2"/>
      <div class="rightWrapper">
        <div class="headBg">
          <div><span class="icon vicon vi-copy"/>待替换的系统名称文字隐私政策</div>
        </div>
        <div class="mainWrapper">
          <div>
            <h1
              style="
            font-size: 22pt;
            line-height: 240%;
            margin: 17pt 0pt 16.5pt;
            orphans: 0;
            page-break-after: avoid;
            page-break-inside: avoid;
            text-align: center;
            widows: 0;
          "
            >
          <span style="font-family: 宋体; font-size: 22pt; font-weight: bold"
          >隐私政策</span
          >
            </h1>
            <p style="margin: 0pt; orphans: 0; text-align: justify; widows: 0">
          <span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
          >蔚蓝</span
          ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >之星</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >重视用户的隐私，并且获取信息权限与提供的服务功能保持一致，不存在使用任何与功能无关的隐私权限和数据，不存在核心功能与附加功能绑定之用途。为了保证对您的个人信息合法、合理、适度的收集、使用，并在安全、可控的情况下进行传输、存储，我们制定了《蔚蓝</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >之星用</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >户隐私政策》（以下简称“本政策”），请您仔细阅读本政策并确定了解我们对您个人信息的处理规则。</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >本政策适用于蔚蓝</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >之星</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >的所有相关服务，随着服务范围的扩大，本政策的内容可随时更新，且毋须另行通知。更新后的隐私声明一旦公布即有效代替原来的隐私声明。</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: bold"
            >我们收集哪些信息</span
            ><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >在您浏览信息的过程中，我们可能会收集您使用蔚蓝</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >之星</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >产品时的设备信息（包括设备型号、设备MAC地址、设备唯一标识符、操作系统版本、分辨率、电信运营商、设备设置、已安装或正在运行的应用信息），以便保障网络安全以及为您提供信息展示的最优方案。</span
            ><br/><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: bold"
            >1.登录/注册</span
            ><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >当您注册</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >待替换的系统名称文字</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >或登录使用</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >待替换的系统名称文字</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >时，您需要提供您的手机号码，以创建您在</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >待替换的系统名称文字</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >的账户和密码；</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >当</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >您选择注销账户后，我们将停止为您提供产品或服务，根据适用法律的要求处理您的账户申请信息。</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: bold"
            >2.数据服务</span
            ><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >当您开启设备定位功能，并使用</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >待替换的系统名称文字</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >提供的相关企业信息等服务时，我们会收集您的位置信息，以便为您提供精准区域的相关信息服务。</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: bold"
            >3.个人信息的保存和保护</span
            ><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >我们会采取各种预防措施来保护您的个人信息，以保障您的个人信息免遭丢失、盗用和误用，以及被擅自取阅、披露、更改或销毁。为确保您个人信息的安全，我们有严格的信息安全规定和流程严格执行上述措施。我们在收集、使用、存储和转移您的用户信息时，将采取确保数据机密性和完整性的加密措施。</span
            ><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >在不幸发生个人信息安全事件后，我们将按照法律法规的要求并最迟不大于30个自然日内向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。</span
            ><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >互联网环境并非百分之百安全，尽管我们有这些安全措施，但请注意在互联网上不存在“完善的安全措施”，我们将尽力确保您的信息的安全性。</span
            ><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >我们重视未成年人的信息保护，对于经父母或监护人同意使用我们的产品或服务而收集未成年人个人信息的情况，我们只会在法律法规允许，父母或监护人明确同意或者保护未成年人所必要的情况下使用，共享，转让或披露此信息。我们将根据国家相关法律法规及本《个人信息及隐私保护政策》的规定保护未成年人的个人信息。</span
            ><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: bold"
            >个人信息的管理</span
            ><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >1.访问您的个人信息</span
            ><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >如果您希望查询、访问或编辑账户个人的基本资料信息，更改您的头像等，您可以通过点击我的进行此类操作。</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >2.个人账号注销</span
            ><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >您可以随时通过我的-</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >更多</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >设置-</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >注销账号</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >，选择账号注销来注销此前注册的账户，在注销账户后我们将停止为您提供产品或服务，并依据您的要求删除您的个人信息，法律法规另有规定的除外。</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >3.个人信息删除</span
            ><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >您可以登录您的个人账户删除信息、关闭有关设备功能、在</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >待替换的系统名称文字</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >通过权限设置变更您授权我们收集和使用的您的个人信息范围。</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: bold"
            >信息的共享和公开披露</span
            ><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >1.共享：除以下情况外，我们不会与</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >待替换的系统名称文字</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >平台服务以外的组织、公司和个人共享您的个人信息：</span
            ><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >a)在获取您明确同意的情况下共享；</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >b)根据法律法规规定在诉讼争议解决过着其它情形下，必须对外共享您的个人信息情况；</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >c)仅为实现本政策中声明的目的，我们的某些服务将由我们和授权合作伙伴共同提供。此情形下，可能会与合作伙伴共享您的某些个人信息，以提供更好的客户服务和用户体验。我们的合作伙伴无权将共享的个人信息用于与产品或服务无关的其他用途。</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >d)</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >待替换的系统名称文字</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >含有到其它网站的链接。除法律另有规定外，</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >待替换的系统名称文字</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >对其它网站的隐私保护措施不负任何责任。我们可能在任何需要的时候增加商业伙伴或共用品牌的网站，但是提供给他们的将仅是综合信息，我们将不会公开您的身份。</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >2.转让：除以下情况外，我们不会将您的个人信息转让给任何公司、组织和个人：</span
            ><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >a)获得您明确同意的情形</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >b)在涉及合并、收购、破产清算和应用转让时，如涉及到个人信息转让，我们会在要求新的持有您个人信息的公司、组织继续受此隐私政策的约束，否则我们将要求该公司、组织重新向您征求授权同意。</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >3.公开披露：我们仅会在以下情况下公开披露您的个人信息：</span
            ><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >a)获取您明确同意或基于您的主动选择</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >b)如果确定您出现违反法律法规或严重违反本政策的情况，为保护</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >待替换的系统名称文字</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >的权利或财产，以及在紧急情况下保护</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >公司</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >、产品或服务的用户或大众的个人安全。</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >4.例外情况：以下情形下，共享或公开披露个人信息时无需事先征得您的授权同意：</span
            ><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >a)与国家安全、国防安全有关的；</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >b)与公共安全、公共卫生、重大公共利益有关的；</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >c)与犯罪侦查、起诉、审判和判决执行等有关的；</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >d)出于维护您或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >e)您自行向社会公众公开的个人信息；</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >f)从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道。</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >根据法律规定，共享经去标识化处理的个人信息，且确保数据接收方无法复原并重新识别个人信息主体的，不属于个人信息的对外共享、公开披露行为，对此类数据的保存及处理将无需另行向您通知并征得您的同意。</span
            ><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >原则上，我们在中华人民共和国境内运营中收集和产生的个人信息，存储在中华人民共和国境内。</span
            ><br/><br/><span
              style="
              color: #808080;
              font-family: 宋体;
              font-size: 12pt;
              font-weight: normal;
            "
            >关于免责说明</span
            ><br/><span
              style="
              color: #808080;
              font-family: 宋体;
              font-size: 12pt;
              font-weight: normal;
            "
            >就下列相关事宜的发生，</span
            ><span
              style="
              color: #808080;
              font-family: 宋体;
              font-size: 12pt;
              font-weight: normal;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              color: #808080;
              font-family: 宋体;
              font-size: 12pt;
              font-weight: normal;
            "
            >不承担任何法律责任：</span
            ><br/><span
              style="
              color: #808080;
              font-family: 宋体;
              font-size: 12pt;
              font-weight: normal;
            "
            >由于您将用户密码告知他人或与他人共享注册帐户，由此导致的任何个人信息的泄露，或其他非因</span
            ><span
              style="
              color: #808080;
              font-family: 宋体;
              font-size: 12pt;
              font-weight: normal;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              color: #808080;
              font-family: 宋体;
              font-size: 12pt;
              font-weight: normal;
            "
            >原因导致的个人信息的泄露；</span
            ><br/><br/><span
              style="
              color: #808080;
              font-family: 宋体;
              font-size: 12pt;
              font-weight: normal;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              color: #808080;
              font-family: 宋体;
              font-size: 12pt;
              font-weight: normal;
            "
            >根据法律规定或政府相关政策要求提供您的个人信息；</span
            ><br/><br/><span
              style="
              color: #808080;
              font-family: 宋体;
              font-size: 12pt;
              font-weight: normal;
            "
            >任何第三方根据</span
            ><span
              style="
              color: #808080;
              font-family: 宋体;
              font-size: 12pt;
              font-weight: normal;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              color: #808080;
              font-family: 宋体;
              font-size: 12pt;
              font-weight: normal;
            "
            >各服务条款及声明中所列明的情况使用您的个人信息，由此所产生的纠纷；</span
            ><br/><br/><span
              style="
              color: #808080;
              font-family: 宋体;
              font-size: 12pt;
              font-weight: normal;
            "
            >任何由于黑客攻击、电脑病毒侵入或政府管制而造成的服务暂时性关闭；</span
            ><br/><br/><span
              style="
              color: #808080;
              font-family: 宋体;
              font-size: 12pt;
              font-weight: normal;
            "
            >因不可抗力导致的任何后果；</span
            ><br/><br/><span
              style="
              color: #808080;
              font-family: 宋体;
              font-size: 12pt;
              font-weight: normal;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              color: #808080;
              font-family: 宋体;
              font-size: 12pt;
              font-weight: normal;
            "
            >在各服务条款及声明中列明的使用方式或免责情形。</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >本条款最终解释权归</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >待替换的系统名称文字</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >有限公司。</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >应用名称：蔚蓝</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >之星</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >公司联系电话：010-6</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >6666666</span
            ><br/><br/><span
              style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >电子邮箱：li.</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >wei</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >@</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >163</span
            ><span style="font-family: 宋体; font-size: 12pt; font-weight: normal"
            >.com.cn</span
            >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vft-layout-header {
  height: 40px !important;
}

.outWrapper {
  height: calc(100% - 40px);
  overflow-y: auto;

  .mainContent {
    height: auto;
    padding-top: 18px;
    display: flex;
    margin-left: auto;
    margin-right: auto;


    .rightWrapper {
      margin-bottom: 10px;
      background-color: rgb(255, 255, 255);
      border-radius: 4px;
      border: 1px solid rgb(243, 243, 243);
      display: flex;
      flex-direction: column;
      flex: 1 1 auto;
      margin-left: 10px;
      position: relative;
      padding: 0 32px;


      .headBg {
        background-size: cover;
        border-bottom: 1px solid #efefef;
        display: flex;
        height: 57px;
        line-height: 57px;
        padding-left: 32px;
        margin-left: -32px;
        margin-right: -32px;

        .icon {
          margin-right: 8px;
          color: #0171f6;
        }
      }

      .mainWrapper {
        span, p {
          font-size: 14px !important;
          line-height: 24px !important;
        }
      }
    }
  }

  @media screen and (min-width: 1280px) and (max-width: 1320px) {
    .mainContent {
      padding-left: 45px;
      padding-right: 45px
    }
  }

  @media screen and (max-width: 1279px) {
    .mainContent {
      padding-left: 24px;
      padding-right: 24px;
      width: 1226px
    }
  }

  @media screen and (min-width: 1321px) and (max-width: 1464px) {
    .mainContent {
      padding-left: 45px;
      padding-right: 45px
    }
  }

  @media screen and (min-width: 1465px) {
    .mainContent {
      width: 1320px
    }
  }
}


</style>
