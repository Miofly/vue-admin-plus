<template>
  <div class="flex justify-start">
    <template v-for="item in toolbarItemList" :key="item.type">
      <vft-tooltip placement="bottom" v-bind="item.disabled ? { visible: false } : {}" :content="item.tooltip">
        <span class="w-30px" v-if="item.icon" @click="onControl(item)">
          <vft-icon :icon="item.icon"/>
        </span>
      </vft-tooltip>
    </template>
  </div>
</template>
<script lang="ts">
  import type { ToolbarConfig } from './types';
  import { defineComponent, ref, onUnmounted, unref, nextTick, watchEffect } from 'vue';
  import { useFlowChartContext } from './useFlowContext';
  import { ToolbarTypeEnum } from './enum';

  export default defineComponent({
    name: 'FlowChartToolbar',
    props: {
      prefixCls: String
    },
    emits: ['view-data'],
    setup(_, { emit }) {
      const toolbarItemList = ref<ToolbarConfig[]>([
        {
          type: ToolbarTypeEnum.ZOOM_IN,
          icon: 'ico-codicon:zoom-out',
          tooltip: '缩小'
        },
        {
          type: ToolbarTypeEnum.ZOOM_OUT,
          icon: 'ico-codicon:zoom-in',
          tooltip: '放大'
        },
        {
          type: ToolbarTypeEnum.RESET_ZOOM,
          icon: 'ico-codicon:screen-normal',
          tooltip: '重置比例'
        },
        { separate: true },
        {
          type: ToolbarTypeEnum.UNDO,
          icon: 'ico-ion:arrow-undo-outline',
          tooltip: '后退',
          disabled: true
        },
        {
          type: ToolbarTypeEnum.REDO,
          icon: 'ico-ion:arrow-redo-outline',
          tooltip: '前进',
          disabled: true
        },
        { separate: true },
        {
          type: ToolbarTypeEnum.SNAPSHOT,
          icon: 'ico-ion:download-outline',
          tooltip: '下载'
        }
        // {
        //   type: ToolbarTypeEnum.VIEW_DATA,
        //   icon: 'ico-carbon:document-view',
        //   tooltip: '查看数据'
        // }
      ]);

      const { logicFlow } = useFlowChartContext();

      function onHistoryChange({ data: { undoAble, redoAble } }) {
        const itemsList = unref(toolbarItemList);
        const undoIndex = itemsList.findIndex((item) => item.type === ToolbarTypeEnum.UNDO);
        const redoIndex = itemsList.findIndex((item) => item.type === ToolbarTypeEnum.REDO);
        if (undoIndex !== -1) {
          unref(toolbarItemList)[undoIndex].disabled = !undoAble;
        }
        if (redoIndex !== -1) {
          unref(toolbarItemList)[redoIndex].disabled = !redoAble;
        }
      }

      const onControl = (item) => {
        const lf = unref(logicFlow);
        if (!lf) {
          return;
        }
        switch (item.type) {
          case ToolbarTypeEnum.ZOOM_IN:
            lf.zoom();
            break;
          case ToolbarTypeEnum.ZOOM_OUT:
            lf.zoom(true);
            break;
          case ToolbarTypeEnum.RESET_ZOOM:
            lf.resetZoom();
            break;
          case ToolbarTypeEnum.UNDO:
            lf.undo();
            break;
          case ToolbarTypeEnum.REDO:
            lf.redo();
            break;
          case ToolbarTypeEnum.SNAPSHOT:
            lf.getSnapshot();
            break;
          case ToolbarTypeEnum.VIEW_DATA:
            emit('view-data');
            break;
        }
      };

      watchEffect(async () => {
        if (unref(logicFlow)) {
          await nextTick();
          unref(logicFlow)?.on('history:change', onHistoryChange);
        }
      });

      onUnmounted(() => {
        unref(logicFlow)?.off('history:change', onHistoryChange);
      });
      return { toolbarItemList, onControl };
    }
  });
</script>
