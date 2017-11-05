/**
 * Copyright (c) 2016-present Alibaba Group Holding Limited
 * @author Houfeng <admin@xhou.net>
 */

const utils = require('ntils');
const inquirer = require('inquirer');
const globby = require('globby');
const confman = require('confman');
const del = require('del');
const fetch = require('node-fetch');
const open = require('opn');
const stp = require('stp');

const exec = require('./exec');
const writeFile = require('./writefile');
const readFile = require('./readfile');
const mkdirp = require('./mkdirp');
const download = require('./download');
const sleep = require('./sleep');
const prompt = require('./prompt');
const mod = require('../mod');
const oneport = require('./oneport');
const yaml = require('./yaml');
const trim = require('./trim');
const stream2buffer = require('./stream2buffer');
const buffer2stream = require('./buffer2stream');
const copydir = require('./copydir');

utils.exec = exec;
utils.writeFile = writeFile;
utils.readFile = readFile;
utils.del = del;
utils.mkdirp = mkdirp;
utils.download = download;
utils.sleep = sleep;
utils.prompt = prompt;
utils.npm = mod;
utils.mod = mod;
utils.open = open;
utils.oneport = oneport;
utils.fetch = fetch;
utils.stp = stp;
utils.yaml = yaml;
utils.trim = trim;
utils.inquirer = inquirer;
utils.globby = globby;
utils.glob = globby;
utils.files = globby;
utils.confman = confman;
utils.config = confman;
utils.streamToBuffer = stream2buffer;
utils.bufferToStream = buffer2stream;
utils.stream2buffer = stream2buffer;
utils.buffer2stream = buffer2stream;
utils.copydir = copydir;

module.exports = utils;
