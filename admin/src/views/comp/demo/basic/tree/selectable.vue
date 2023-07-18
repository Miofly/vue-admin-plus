<template>
  <vft-tree
    ref="treeRef"
    :props="props"
    :load="loadNode"
    lazy
    node-key="name"
    show-checkbox
    @check-change="handleCheckChange"
  />
</template>

<script lang="ts" setup>
import type Node from 'vft';
let count = 1;

interface Tree {
  name: string
}

const treeRef = ref();

const props = {
  label: 'name',
  children: 'zones'
};

const handleCheckChange = (
  data: Tree,
  checked: boolean,
  indeterminate: boolean
) => {
  console.log(data, checked, indeterminate);
};

const loadNode = (node: Node, resolve: (data: Tree[]) => void) => {
  if (node.level === 0) {
    return resolve([{ name: 'Root1' }, { name: 'Root2' }]);
  }
  if (node.level > 3) return resolve([]);

  let hasChild = false;
  if (node.data.name === 'region1') {
    hasChild = true;
  } else if (node.data.name === 'region2') {
    hasChild = false;
  } else {
    hasChild = Math.random() > 0.5;
  }

  setTimeout(() => {
    let data: Tree[] = [];
    if (hasChild) {
      data = [
        {
          name: `zone${count++}`
        },
        {
          name: `zone${count++}`
        }
      ];
    } else {
      data = [];
    }

    resolve(data);
  }, 500);
};
</script>
