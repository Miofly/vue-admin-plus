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
      <slide-left-bar v-if="!isInnerPage"  :tabindex="1"/>
      <div class="rightWrapper">
        <div class="headBg">
          <div><span class="icon vicon vi-copy"/>待替换的系统名称文字用户协议</div>
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
          >用户协议</span
          >
            </h1>
            <p style="margin: 0pt; orphans: 0; text-align: justify; widows: 0">
              <span style="font-family: Calibri; font-size: 10.5pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >欢迎您</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >来到待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >，本协议自任何用户（以下简称“您”）开始浏览或使用</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >时即产生法律效力。</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
          >在使用</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >有限公司（以下简称“本公司</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >”）</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >提供的各项服务之前，请您务必审慎阅读、充分理解各条款内容，特别是授权、免除或者限制责任的条款、法律适用和争议解决条款。如您未满18周岁，请您在法定监护人陪同下仔细阅读并充分理解本协议，并征得法定监护人的同意后下载/使用</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >相关软件或服务。</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
          >当您使用</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >相关功能与服务时，即表示您已充分阅读、理解并接受本协议的全部内容，并与</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >本</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >公司达成一致，成为</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >相关软件或服务的用户（以下简称“用户”）。如果您不同意本协议或其中任何条款约定，您可以主动取消</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >提供的服务。</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
          >一、服务介绍</span
          >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
          >1.软件和数据服务：</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >是一个商用服务平台，为用户提供包括企业环境信息、企业安全监管信息、环境绩效等级等数据查询和管理服务。用户引述</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >中的信息（包括但不仅限于各类数据及相关报告）,请务必注明信息来源于“</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >”。用户引述</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >发布的信息，如果改变形式或内容，需要事先征得</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >本</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >公司的书面同意。</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
          >2.信息公开服务：</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >为用户提供信息公开服务，包括但不限于帮助企业在</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >的平台上进行各类环境、安全、社会和公司治理类信息的自主公开。
            任何用户通过</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >公开上述信息，需对信息的真实性和有效性负责，且确保有权公开上述信息。任何用户通过</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >公开上述信息，即视为授权公司获取上述信息并授权</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >公司</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >通过</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >等公开渠道公开上述信息，且授权公司对上述信息无偿使用。</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
          >二、用户注册及使用规范</span
          >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
          >1.您确认，在您开始使用</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >前，您应当具备中华人民共和国法律规定的与您行为相适应的民事行为能力。若您不具备前述与您行为相适应的民事行为能力，则您及您的监护人应依照法律规定承担因此而导致的一切后果。</span
            >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
          >2.</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >账号的所有权归</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >本</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
            >公司所有，您完成申请注册后，将获得所注册账号的使用权，该使用权仅限于您使用，您无权赠与、借用、租用、转让或售卖您的账号。</span
            >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >3.请妥善保管账号及密码信息，由于您自身行为导致的账号或密码的泄露、遗忘等情形或其他原因所带来的损失，</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: bold;
              vertical-align: baseline;
            "
            >本</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: bold;
              vertical-align: baseline;
            "
            >公司</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >将尽量配合您采取积极措施降低相关损失，但因此造成的不利后果由您自行承担。</span
            >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >4.您使用</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >发布信息（包括但不限于用户注册名、用户头像等）必须遵守国家有关法律规定，并承担一切因发布信息不当导致的民事、行政或刑事法律责任。</span
            >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >5.未经</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: bold;
              vertical-align: baseline;
            "
            >本</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: bold;
              vertical-align: baseline;
            "
            >公司</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >许可，任何单位或个人不得通过任何方式（包括但不限于恶意注册</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >账号，机器抓取、复制、镜像等方式）获取</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >内的任何数据和信息。</span
            >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >6.您同意</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >本</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: bold;
              vertical-align: baseline;
            "
            >公司可</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >以在提供服务的过程中通过邮件、短信、APP推送等方式，自行或由第三方向您发送相关信息。</span
            >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >三、免责声明</span
          >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >1.</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >数据主要来源于：</span
            >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >a)各级政府、环保、水务、安监、工信、气象、发改委、规划等部门；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >b)企业依法主动公开的信息;</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >c)企业授权</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >公开或自愿通过</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >公开的信息；</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >d)时事新闻；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: normal;
              vertical-align: baseline;
            "
          >e</span
          ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: bold;
              vertical-align: baseline;
            "
            >)公司通过合法渠道采购的数据；</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
          <span style="font-family: Calibri; font-size: 12pt; font-weight: bold"
          >&#xa0;</span
          >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              font-weight: bold;
              vertical-align: baseline;
            "
          >f)公司的</span
          ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >研究成果、通知声明等。</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >2.</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >公司</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >尽最大可能保证</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >的信息同引述文件一致。对于</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >软件及相关服务，格澜数字科技（北京）有限公司不提供任何种类的明示或暗示担保，包括但不限于数据信息全面及准确性、特定用途适用性等。如因原始信息的真实性或正确性造成的后果，公司不承担责任。</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >3.任何用户通过</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >公开相关信息的，需对其真实性、有效性负责，且确保有权公开上述相应信息。</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >4.用户在超出</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >范围外获取的其他服务可能产生的费用由用户自行承担。</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >5.任何用户根据</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >提供的数据和信息产生的观点和看法，不代表</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >，与公司观点、立场无关，相关责任由用户自行承担。</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >6.关于使用</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >任何可能涉及财产的网络信息、帐户密码等信息的，用户请谨慎对待并自行进行判断，基于前述原因您遭受的利润、商业信誉、资料损失或其他有形或无形损失，格澜数字科技（北京）有限公司不承担任何直接、间接、附带、特别、衍生性或惩罚性的赔偿责任。</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >7.用户因为违反本协议的约定而触犯中华人民共和国法律的，应自行承担一切法律责任，格澜数字科技（北京）有限公司不承担任何责任。</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >8.对于下述原因导致的合同履行障碍、履行瑕疵、履行延后或履行内容变更等情形，格澜数字科技（北京）有限公司不承担相应的违约责任：</span
          >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >a)因自然灾害、罢工、暴乱、战争、疫情、政府行为、司法行政命令等不可抗力因素；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >b)电力供应故障、通讯网络故障等公共服务因素或第三人因素（包括但不限于：病毒、木马、恶意程序攻击、网络问题、系统不稳定）；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >c)在</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >本</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >公司已尽善意管理的情况下，因常规或紧急的设备与系统维护、设备与系统故障、网络信息与数据安全等因素。</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >四、用户禁止事项</span
          >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >如果您使用</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >服务，则视为您承诺不实施以下行为：</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >1.上载、展示、张贴、传播或以其它方式传送含有下列内容之一的信息（包括但不限于图片、文字、视频、音频、链接等）；</span
          >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >a)反对宪法所确定的基本原则的；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >b)危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >c)损害国家荣誉和利益的；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >d)煽动民族仇恨、民族歧视、破坏民族团结的；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >e)破坏国家宗教政策，宣扬邪教和封建迷信的；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >f)散布谣言，扰乱社会秩序，破坏社会稳定的；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >g)散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >h)侮辱或者诽谤他人，侵害他人合法权利的；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >i)含有虚假、欺诈、有害、胁迫、侵害他人隐私、骚扰、侵害、中伤、粗俗、猥亵、与公序良俗不符或其它道德上令人反感的内容；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >j)含有中国法律、法规、规章、条例以及任何具有法律效力之规范所限制或禁止的其它内容的。</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >2.为任何非法目的而使用</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >；</span
            >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >3.恶意注册</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >账号；</span
            >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >4.利用</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >服务从事以下活动：</span
            >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >a)未经书面允许，进入计算机信息网络或者使用计算机信息网络资源的；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >b)未经书面允许，对计算机信息网络功能进行删除、修改或者增加的；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >c)未经书面允许，进入计算机信息网络中对存储、处理或者传输的数据和应用程序进行删除、修改或者增加的；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >d)故意制作、传播计算机病毒（包括木马）等破坏性程序，盗取其他用户账户、密码、隐私、操控他人电脑的；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >e)其他危害计算机信息网络安全的行为。</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >5.未经书面允许，利用</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >从事广告发布、变相广告、口碑营销、产品销售、传销等行为。</span
            >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >6.对</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >相关服务之使用或获得，进行复制、拷贝、出售、转售或用于任何其它商业目的。</span
            >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >7.除发布者外，删除或修改其他个人或公司公布的资料。</span
          >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >8.未经</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >同意，向在</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >公布信息的个人或公司发送电子邮件、拨打电话、寄信或以其他方式擅自进行接触。</span
            >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >五、用户隐私</span
          >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >1.</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >本</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >公司致力于保护用户个人信息（即能够独立或与其他信息结合后识别特定主体身份或者反映特定主体活动情况的信息），如未取得用户事先同意，</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >公司</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >不会将用户个人信息转移或披露给任何非关联的第三方，除非有如下情形之一或更多：</span
            >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >a)法律、法规或司法、行政等国家主管机关要求；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >b)与国家安全、国防安全有关的；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >c)与公共安全、公共卫生、重大公共利益有关的；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >d)为完成合并、分立、收购或资产转让的；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >e)获得用户或未成年用户监护人的授权；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >f)为维护</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >本</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >公司自身合法权益而向用户提起诉讼或仲裁；</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >g)</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >本</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >公司及其关联方为提供您要求的服务所必需；</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >h)</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >本</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >公司及其合作方为维护公众利益所必需；</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >i)用户自行向第三方公开其个人信息；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >j)由于用户将其用户密码告知他人或与他人共享注册账号与密码，由此导致的任何个人信息的泄露，或其他非因</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >本</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >公司原因导致的个人信息的泄露；</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >k)为检测有害及欺诈用户而向第三方披露，但公司应与该第三方签订协议，以确保该第三方承担不低于本协议的个人信息保护责任和义务；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >l)任何由于黑客攻击、电脑病毒侵入及其他不可抗力事件导致用户个人信息的泄露；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >m)从合法公开披露的信息中收集的个人信息，如合法的新闻报道、政府信息公开等渠道；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >n)其他合理情形。</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >2.用户同意</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >本</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >公司可在以下事项中使用用户的个人信息：</span
            >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >a)</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >公司</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >向用户及时发送通知、消息，如软件更新、本协议条款的变更等；</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >b)公司内部进行审计、数据分析和研究等，以改进产品、服务和与用户之间的沟通；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >c)公司管理、审查用户信息及进行处理措施；</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >d)适用法律、法规规定的其他事项。</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >除上述事项外，如未取得用户事先同意，公司不会使用用户个人信息。</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >六、违约责任</span
          >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >1.如果您在使用</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >时不能履行和遵守本协议中的约定，公司有权删除您发布的相关信息，直到封闭您的账号或/和暂时、永久禁止您在</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >发布信息，同时保留依法追究您的法律责任的权利，</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >保留将系统内的记录作为您违反法律和本协议的证据加以保存与展示的权利。</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >2.如您的行为使</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >本</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >公司及其合作公司、关联公司遭受损失（包括自身的直接经济损失、商誉损失及对外支付的赔偿金、和解款、律师费、诉讼费等间接经济损失），您应赔偿</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >本</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >公司及其合作公司、关联公司上述全部损失。</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >七、协议修改</span
          >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >您理解并同意，根据服务的升级、国家法律法规变化等需要，</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >本公司</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >有权对本协议进行修改。</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >本公司</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >会在</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >产品中公告相关的修改信息，该公告行为视为已经通知用户修改的内容。如果您不同意公司对本协议相关条款所做的修改，您有权并应当停止使用</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >相关软件或服务；如果您继续使用</span
            ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >相关软件或服务，则视为您接受本协议相关条款所做的修改。</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >八、法律适用与管辖</span
          >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >1.本协议的订立、生效、履行、变更、终止、解释及争议的解决均适用中华人民共和国（港澳台除外）法律。</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >2.您同意有关本协议以及使用</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >的服务产生的任何争议，由公司与您协商解决。协商不成时，任何一方均可向格澜数字科技（北京）有限公司工商注册地所在的人民法院提起诉讼。</span
            >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >九、其他</span
          >
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >1.本协议中的标题仅为方便及阅读而设，并不影响本协议中任何规定的含义或解释。</span
          >
            </p>
            <p style="line-height: 12pt; margin: 0pt">
              <span style="font-family: Calibri; font-size: 12pt">&#xa0;</span>
            </p>
            <p style="line-height: 10.5pt; margin: 0pt">
          <span
            style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
          >2.本协议的版权和最终解释权归</span
          ><span
              style="
              font-family: 宋体;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >待替换的系统名称文字</span
            ><span
              style="
              font-family: Helvetica;
              font-size: 10.5pt;
              font-style: normal;
              vertical-align: baseline;
            "
            >有限公司所有。</span
            >
            </p>
            <p style="margin: 0pt; orphans: 0; text-align: justify; widows: 0">
              <span style="font-family: Calibri; font-size: 10.5pt">&#xa0;</span>
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
