// @format
import http from "http";
import fs from "fs";
import htm from "htm";
import vhtml from "vhtml";
import { sub } from "date-fns";

const html = htm.bind(vhtml);

import { plot } from "../src/index.mjs";

//let x =
//  '["2021-01-01T23:01:03.419Z","2021-01-02T23:01:03.438Z","2021-01-03T23:01:42.826Z","2021-01-04T23:01:03.334Z","2021-01-05T23:01:03.401Z","2021-01-06T23:01:03.445Z","2021-01-07T23:01:04.014Z","2021-01-08T23:01:03.484Z","2021-01-09T23:01:03.449Z","2021-01-10T23:02:13.526Z","2021-01-11T23:01:03.280Z","2021-01-12T23:01:03.684Z","2021-01-13T23:01:03.358Z","2021-01-14T23:01:03.257Z","2021-01-15T23:01:03.026Z","2021-01-16T23:01:03.076Z","2021-01-17T23:02:14.211Z","2021-01-18T23:01:03.131Z","2021-01-19T23:01:03.286Z","2021-01-20T23:01:03.119Z","2021-01-21T23:01:03.388Z","2021-01-22T23:01:03.128Z","2021-01-23T23:01:03.310Z","2021-01-24T23:01:03.134Z","2021-01-25T23:01:03.285Z","2021-01-26T23:01:03.260Z","2021-01-27T23:01:03.316Z","2021-01-28T23:01:03.318Z","2021-01-29T23:01:03.322Z","2021-01-30T23:01:03.305Z","2021-01-31T23:01:03.141Z","2021-02-01T23:01:03.215Z","2021-02-02T23:01:03.061Z","2021-02-03T23:01:03.069Z","2021-02-04T23:01:03.312Z","2021-02-05T23:01:03.118Z","2021-02-06T23:01:03.164Z","2021-02-07T23:01:02.937Z","2021-02-08T23:01:03.054Z","2021-02-09T23:01:03.228Z","2021-02-10T23:01:03.145Z","2021-02-11T23:01:03.400Z","2021-02-13T08:47:08.173Z","2021-02-13T23:44:37.618Z","2021-02-14T23:01:04.010Z","2021-02-15T23:01:05.155Z","2021-02-16T23:01:07.055Z","2021-02-17T23:01:04.294Z","2021-02-18T23:01:03.910Z","2021-02-19T23:01:03.953Z","2021-02-20T23:01:04.069Z","2021-02-21T23:03:56.262Z","2021-02-22T23:01:03.471Z","2021-02-23T23:01:03.962Z","2021-02-24T18:30:21.508Z","2021-02-25T00:01:06.156Z","2021-02-26T00:01:04.876Z","2021-02-27T00:01:04.396Z","2021-02-28T00:01:04.071Z","2021-03-01T00:03:56.742Z","2021-03-02T00:01:05.686Z","2021-03-03T00:01:07.232Z","2021-03-04T00:01:05.336Z","2021-03-05T00:01:03.702Z","2021-03-06T00:01:05.358Z","2021-03-07T00:01:03.483Z","2021-03-08T00:04:09.832Z","2021-03-09T00:01:03.422Z","2021-03-10T00:01:03.657Z","2021-03-11T08:40:45.845Z","2021-03-12T00:01:05.320Z","2021-03-13T10:21:40.328Z","2021-03-14T00:01:04.770Z","2021-03-15T00:04:39.567Z","2021-03-16T00:01:03.847Z","2021-03-17T00:01:09.507Z","2021-03-18T00:01:03.601Z","2021-03-19T00:01:04.699Z","2021-03-20T09:45:48.563Z","2021-03-21T00:01:04.840Z","2021-03-22T11:12:19.281Z","2021-03-23T00:01:05.461Z","2021-03-24T00:01:03.727Z","2021-03-25T00:01:03.928Z","2021-03-26T00:01:03.609Z","2021-03-27T00:01:03.563Z","2021-03-28T00:01:08.111Z","2021-03-29T00:04:31.110Z","2021-03-30T00:01:04.220Z","2021-03-31T00:01:03.631Z","2021-04-01T00:01:04.409Z","2021-04-02T00:01:43.662Z","2021-04-03T00:01:03.458Z","2021-04-04T00:01:04.337Z","2021-04-05T00:01:10.114Z","2021-04-06T00:01:03.789Z","2021-04-07T00:01:09.090Z","2021-04-08T00:01:10.001Z","2021-04-09T00:01:03.600Z","2021-04-10T00:01:04.613Z","2021-04-11T00:01:03.691Z","2021-04-12T00:01:03.335Z","2021-04-13T07:09:02.537Z","2021-04-14T00:01:03.797Z","2021-04-15T00:01:03.230Z","2021-04-16T10:53:07.662Z","2021-04-17T00:01:07.748Z","2021-04-18T00:01:03.633Z","2021-04-19T00:01:03.364Z","2021-04-20T07:08:52.048Z","2021-04-21T00:01:04.028Z","2021-04-22T00:01:11.279Z","2021-04-23T00:01:03.292Z","2021-04-24T00:01:03.511Z","2021-04-25T00:01:04.440Z","2021-04-26T00:01:05.404Z","2021-04-27T00:01:03.306Z","2021-04-28T00:01:03.816Z","2021-04-29T00:01:03.562Z","2021-04-30T00:01:03.646Z","2021-05-01T00:01:03.951Z","2021-05-02T00:01:03.760Z","2021-05-03T00:01:03.711Z","2021-05-04T00:01:03.887Z","2021-05-05T00:01:03.521Z","2021-05-06T00:01:03.610Z","2021-05-07T00:01:07.180Z","2021-05-08T22:34:08.606Z","2021-05-09T08:13:05.482Z","2021-05-10T00:01:04.203Z","2021-05-11T00:01:04.010Z","2021-05-12T00:01:03.966Z","2021-05-13T00:01:04.113Z","2021-05-14T00:01:04.225Z","2021-05-15T00:01:03.945Z","2021-05-16T00:01:04.035Z","2021-05-17T00:01:03.823Z","2021-05-18T00:01:04.134Z","2021-05-19T00:01:03.627Z","2021-05-20T00:01:03.815Z"]';
//let x = '["2021-01-01T23:01:03.423Z","2021-01-02T23:01:03.443Z","2021-01-03T23:01:42.830Z","2021-01-04T23:01:03.339Z","2021-01-05T23:01:03.405Z","2021-01-06T23:01:03.449Z","2021-01-07T23:01:04.019Z","2021-01-08T23:01:03.489Z","2021-01-09T23:01:03.454Z","2021-01-10T23:02:13.533Z","2021-01-11T23:01:03.285Z","2021-01-12T23:01:03.692Z","2021-01-13T23:01:03.363Z","2021-01-14T23:01:03.261Z","2021-01-15T23:01:03.031Z","2021-01-16T23:01:03.080Z","2021-01-17T23:02:14.217Z","2021-01-18T23:01:03.137Z","2021-01-19T23:01:03.297Z","2021-01-20T23:01:03.123Z","2021-01-21T23:01:03.397Z","2021-01-22T23:01:03.134Z","2021-01-23T23:01:03.316Z","2021-01-24T23:01:03.138Z","2021-01-25T23:01:03.291Z","2021-01-26T23:01:03.266Z","2021-01-27T23:01:03.322Z","2021-01-28T23:01:03.323Z","2021-01-29T23:01:03.327Z","2021-01-30T23:01:03.309Z","2021-01-31T23:01:03.147Z","2021-02-01T23:01:03.220Z","2021-02-02T23:01:03.065Z","2021-02-03T23:01:03.073Z","2021-02-04T23:01:03.318Z","2021-02-05T23:01:03.121Z","2021-02-06T23:01:03.168Z","2021-02-07T23:01:02.949Z","2021-02-08T23:01:03.059Z","2021-02-09T23:01:03.233Z","2021-02-10T23:01:03.151Z","2021-02-11T23:01:03.405Z","2021-02-13T08:47:08.178Z","2021-02-13T23:44:37.625Z","2021-02-14T23:01:04.027Z","2021-02-15T23:01:05.163Z","2021-02-16T23:01:07.060Z","2021-02-17T23:01:04.302Z","2021-02-18T23:01:03.914Z","2021-02-19T23:01:03.957Z","2021-02-20T23:01:04.075Z","2021-02-21T23:03:56.287Z","2021-02-22T23:01:03.476Z","2021-02-23T23:01:03.967Z","2021-02-24T18:30:21.511Z","2021-02-25T00:01:06.161Z","2021-02-26T00:01:04.883Z","2021-02-27T00:01:04.400Z","2021-02-28T00:01:04.076Z","2021-03-01T00:03:56.749Z","2021-03-02T00:01:05.692Z","2021-03-03T00:01:07.237Z","2021-03-04T00:01:05.341Z","2021-03-05T00:01:03.706Z","2021-03-06T00:01:05.363Z","2021-03-07T00:01:03.507Z","2021-03-08T00:04:09.839Z","2021-03-09T00:01:03.427Z","2021-03-10T00:01:03.661Z","2021-03-11T08:40:45.848Z","2021-03-12T00:01:05.325Z","2021-03-13T10:21:40.332Z","2021-03-14T00:01:04.775Z","2021-03-15T00:04:39.572Z","2021-03-16T00:01:03.851Z","2021-03-17T00:01:09.512Z","2021-03-18T00:01:03.606Z","2021-03-19T00:01:04.703Z","2021-03-20T09:45:48.566Z","2021-03-21T00:01:04.845Z","2021-03-22T11:12:19.285Z","2021-03-23T00:01:05.466Z","2021-03-24T00:01:03.732Z","2021-03-25T00:01:03.934Z","2021-03-26T00:01:03.613Z","2021-03-27T00:01:03.567Z","2021-03-28T00:01:08.114Z","2021-03-29T00:04:31.118Z","2021-03-30T00:01:04.225Z","2021-03-31T00:01:03.637Z","2021-04-01T00:01:04.414Z","2021-04-02T00:01:43.668Z","2021-04-03T00:01:03.463Z","2021-04-04T00:01:04.342Z","2021-04-05T00:01:10.119Z","2021-04-06T00:01:03.797Z","2021-04-07T00:01:09.094Z","2021-04-08T00:01:10.005Z","2021-04-09T00:01:03.605Z","2021-04-10T00:01:04.621Z","2021-04-11T00:01:03.699Z","2021-04-12T00:01:03.343Z","2021-04-13T07:09:02.540Z","2021-04-14T00:01:03.801Z","2021-04-15T00:01:03.235Z","2021-04-16T10:53:07.678Z","2021-04-17T00:01:07.762Z","2021-04-18T00:01:03.637Z","2021-04-19T00:01:03.369Z","2021-04-20T07:08:52.051Z","2021-04-21T00:01:04.033Z","2021-04-22T00:01:11.284Z","2021-04-23T00:01:03.296Z","2021-04-24T00:01:03.516Z","2021-04-25T00:01:04.445Z","2021-04-26T00:01:05.409Z","2021-04-27T00:01:03.311Z","2021-04-28T00:01:03.818Z","2021-04-29T00:01:03.565Z","2021-04-30T00:01:03.649Z","2021-05-01T00:01:03.954Z","2021-05-02T00:01:03.764Z","2021-05-03T00:01:03.714Z","2021-05-04T00:01:03.890Z","2021-05-05T00:01:03.525Z","2021-05-06T00:01:03.614Z","2021-05-07T00:01:07.185Z","2021-05-08T22:34:08.610Z","2021-05-09T08:13:05.486Z","2021-05-10T00:01:04.208Z","2021-05-11T00:01:04.015Z","2021-05-12T00:01:03.971Z","2021-05-13T00:01:04.119Z","2021-05-14T00:01:04.230Z","2021-05-15T00:01:03.949Z","2021-05-16T00:01:04.041Z","2021-05-17T00:01:03.827Z","2021-05-18T00:01:04.137Z","2021-05-19T00:01:03.632Z","2021-05-20T00:01:03.819Z","2021-05-21T00:01:03.958Z","2021-05-22T00:01:03.905Z","2021-05-23T00:01:03.775Z","2021-05-24T00:01:03.962Z","2021-05-25T00:01:03.744Z","2021-05-26T00:01:03.795Z","2021-05-27T00:01:03.881Z","2021-05-28T00:01:03.867Z","2021-05-29T00:01:03.956Z","2021-05-30T00:01:03.788Z","2021-05-31T00:01:03.900Z","2021-06-01T07:09:33.580Z","2021-06-02T00:01:04.245Z","2021-06-03T00:01:03.625Z","2021-06-04T08:07:22.265Z","2021-06-05T00:17:43.265Z","2021-06-06T00:01:04.077Z","2021-06-07T15:11:14.295Z","2021-06-08T00:01:04.019Z","2021-06-09T00:01:03.890Z","2021-06-10T00:01:03.926Z","2021-06-11T00:01:03.948Z","2021-06-12T00:01:03.702Z","2021-06-13T00:01:03.661Z","2021-06-14T00:01:03.505Z","2021-06-15T00:01:04.194Z","2021-06-16T00:01:03.827Z","2021-06-17T00:01:03.844Z","2021-06-18T00:01:03.869Z","2021-06-19T00:01:03.705Z","2021-06-20T00:01:03.751Z","2021-06-21T00:01:03.627Z","2021-06-22T00:01:03.576Z","2021-06-23T00:01:03.867Z","2021-06-24T07:20:57.732Z","2021-06-25T00:01:03.744Z","2021-06-26T00:01:04.029Z","2021-06-27T00:01:03.589Z","2021-06-28T00:01:04.883Z","2021-06-29T00:01:03.876Z"]';
//let x = '["2021-01-01T23:01:03.420Z","2021-01-02T23:01:03.439Z","2021-01-03T23:01:42.827Z","2021-01-04T23:01:03.336Z","2021-01-05T23:01:03.402Z","2021-01-06T23:01:03.446Z","2021-01-07T23:01:04.015Z","2021-01-08T23:01:03.485Z","2021-01-09T23:01:03.451Z","2021-01-10T23:02:13.527Z","2021-01-11T23:01:03.281Z","2021-01-12T23:01:03.686Z","2021-01-13T23:01:03.359Z","2021-01-14T23:01:03.258Z","2021-01-15T23:01:03.028Z","2021-01-16T23:01:03.077Z","2021-01-17T23:02:14.212Z","2021-01-18T23:01:03.133Z","2021-01-19T23:01:03.293Z","2021-01-20T23:01:03.120Z","2021-01-21T23:01:03.389Z","2021-01-22T23:01:03.130Z","2021-01-23T23:01:03.312Z","2021-01-24T23:01:03.135Z","2021-01-25T23:01:03.286Z","2021-01-26T23:01:03.261Z","2021-01-27T23:01:03.318Z","2021-01-28T23:01:03.319Z","2021-01-29T23:01:03.323Z","2021-01-30T23:01:03.306Z","2021-01-31T23:01:03.143Z","2021-02-01T23:01:03.216Z","2021-02-02T23:01:03.062Z","2021-02-03T23:01:03.070Z","2021-02-04T23:01:03.313Z","2021-02-05T23:01:03.119Z","2021-02-06T23:01:03.165Z","2021-02-07T23:01:02.945Z","2021-02-08T23:01:03.055Z","2021-02-09T23:01:03.230Z","2021-02-10T23:01:03.146Z","2021-02-11T23:01:03.401Z","2021-02-13T08:47:08.174Z","2021-02-13T23:44:37.618Z","2021-02-14T23:01:04.019Z","2021-02-15T23:01:05.158Z","2021-02-16T23:01:07.056Z","2021-02-17T23:01:04.298Z","2021-02-18T23:01:03.911Z","2021-02-19T23:01:03.954Z","2021-02-20T23:01:04.071Z","2021-02-21T23:03:56.282Z","2021-02-22T23:01:03.472Z","2021-02-23T23:01:03.964Z","2021-02-24T18:30:21.509Z","2021-02-25T00:01:06.158Z","2021-02-26T00:01:04.878Z","2021-02-27T00:01:04.397Z","2021-02-28T00:01:04.072Z","2021-03-01T00:03:56.743Z","2021-03-02T00:01:05.688Z","2021-03-03T00:01:07.233Z","2021-03-04T00:01:05.338Z","2021-03-05T00:01:03.703Z","2021-03-06T00:01:05.359Z","2021-03-07T00:01:03.484Z","2021-03-08T00:04:09.835Z","2021-03-09T00:01:03.423Z","2021-03-10T00:01:03.658Z","2021-03-11T08:40:45.846Z","2021-03-12T00:01:05.321Z","2021-03-13T10:21:40.329Z","2021-03-14T00:01:04.771Z","2021-03-15T00:04:39.568Z","2021-03-16T00:01:03.848Z","2021-03-17T00:01:09.509Z","2021-03-18T00:01:03.603Z","2021-03-19T00:01:04.700Z","2021-03-20T09:45:48.564Z","2021-03-21T00:01:04.841Z","2021-03-22T11:12:19.282Z","2021-03-23T00:01:05.462Z","2021-03-24T00:01:03.728Z","2021-03-25T00:01:03.930Z","2021-03-26T00:01:03.610Z","2021-03-27T00:01:03.564Z","2021-03-28T00:01:08.112Z","2021-03-29T00:04:31.111Z","2021-03-30T00:01:04.221Z","2021-03-31T00:01:03.633Z","2021-04-01T00:01:04.410Z","2021-04-02T00:01:43.664Z","2021-04-03T00:01:03.460Z","2021-04-04T00:01:04.338Z","2021-04-05T00:01:10.115Z","2021-04-06T00:01:03.791Z","2021-04-07T00:01:09.091Z","2021-04-08T00:01:10.002Z","2021-04-09T00:01:03.602Z","2021-04-10T00:01:04.614Z","2021-04-11T00:01:03.696Z","2021-04-12T00:01:03.337Z","2021-04-13T07:09:02.537Z","2021-04-14T00:01:03.798Z","2021-04-15T00:01:03.231Z","2021-04-16T10:53:07.667Z","2021-04-17T00:01:07.758Z","2021-04-18T00:01:03.634Z","2021-04-19T00:01:03.365Z","2021-04-20T07:08:52.048Z","2021-04-21T00:01:04.029Z","2021-04-22T00:01:11.281Z","2021-04-23T00:01:03.293Z","2021-04-24T00:01:03.512Z","2021-04-25T00:01:04.441Z","2021-04-26T00:01:05.405Z","2021-04-27T00:01:03.307Z","2021-04-28T00:01:03.816Z","2021-04-29T00:01:03.563Z","2021-04-30T00:01:03.647Z","2021-05-01T00:01:03.952Z","2021-05-02T00:01:03.761Z","2021-05-03T00:01:03.712Z","2021-05-04T00:01:03.887Z","2021-05-05T00:01:03.522Z","2021-05-06T00:01:03.611Z","2021-05-07T00:01:07.181Z","2021-05-08T22:34:08.607Z","2021-05-09T08:13:05.483Z","2021-05-10T00:01:04.204Z","2021-05-11T00:01:04.011Z","2021-05-12T00:01:03.968Z","2021-05-13T00:01:04.115Z","2021-05-14T00:01:04.227Z","2021-05-15T00:01:03.946Z","2021-05-16T00:01:04.037Z","2021-05-17T00:01:03.824Z","2021-05-18T00:01:04.135Z","2021-05-19T00:01:03.629Z","2021-05-20T00:01:03.817Z","2021-05-21T00:01:03.955Z","2021-05-22T00:01:03.902Z","2021-05-23T00:01:03.772Z","2021-05-24T00:01:03.958Z","2021-05-25T00:01:03.742Z","2021-05-26T00:01:03.792Z","2021-05-27T00:01:03.878Z","2021-05-28T00:01:03.865Z","2021-05-29T00:01:03.952Z","2021-05-30T00:01:03.785Z","2021-05-31T00:01:03.897Z","2021-06-01T07:09:33.577Z","2021-06-02T00:01:04.241Z","2021-06-03T00:01:03.621Z","2021-06-04T08:07:22.262Z","2021-06-05T00:17:43.262Z","2021-06-06T00:01:04.074Z","2021-06-07T15:11:14.293Z","2021-06-08T00:01:04.015Z","2021-06-09T00:01:03.887Z","2021-06-10T00:01:03.923Z","2021-06-11T00:01:03.945Z","2021-06-12T00:01:03.699Z","2021-06-13T00:01:03.658Z","2021-06-14T00:01:03.502Z","2021-06-15T00:01:04.192Z","2021-06-16T00:01:03.820Z","2021-06-17T00:01:03.842Z","2021-06-18T00:01:03.866Z","2021-06-19T00:01:03.702Z","2021-06-20T00:01:03.748Z","2021-06-21T00:01:03.624Z","2021-06-22T00:01:03.573Z","2021-06-23T00:01:03.864Z","2021-06-24T07:20:57.728Z","2021-06-25T00:01:03.741Z","2021-06-26T00:01:04.025Z","2021-06-27T00:01:03.585Z","2021-06-28T00:01:04.879Z","2021-06-29T00:01:03.873Z"]';
let x = '["2021-01-01T23:01:03.419Z","2021-01-02T23:01:03.438Z","2021-01-03T23:01:42.826Z","2021-01-04T23:01:03.334Z","2021-01-05T23:01:03.401Z","2021-01-06T23:01:03.445Z","2021-01-07T23:01:04.014Z","2021-01-08T23:01:03.484Z","2021-01-09T23:01:03.449Z","2021-01-10T23:02:13.526Z","2021-01-11T23:01:03.280Z","2021-01-12T23:01:03.684Z","2021-01-13T23:01:03.358Z","2021-01-14T23:01:03.257Z","2021-01-15T23:01:03.026Z","2021-01-16T23:01:03.076Z","2021-01-17T23:02:14.211Z","2021-01-18T23:01:03.131Z","2021-01-19T23:01:03.286Z","2021-01-20T23:01:03.119Z","2021-01-21T23:01:03.388Z","2021-01-22T23:01:03.128Z","2021-01-23T23:01:03.310Z","2021-01-24T23:01:03.134Z","2021-01-25T23:01:03.285Z","2021-01-26T23:01:03.260Z","2021-01-27T23:01:03.316Z","2021-01-28T23:01:03.318Z","2021-01-29T23:01:03.322Z","2021-01-30T23:01:03.305Z","2021-01-31T23:01:03.141Z","2021-02-01T23:01:03.215Z","2021-02-02T23:01:03.061Z","2021-02-03T23:01:03.069Z","2021-02-04T23:01:03.312Z","2021-02-05T23:01:03.118Z","2021-02-06T23:01:03.164Z","2021-02-07T23:01:02.937Z","2021-02-08T23:01:03.054Z","2021-02-09T23:01:03.228Z","2021-02-10T23:01:03.145Z","2021-02-11T23:01:03.400Z","2021-02-13T08:47:08.173Z","2021-02-13T23:44:37.618Z","2021-02-14T23:01:04.010Z","2021-02-15T23:01:05.155Z","2021-02-16T23:01:07.055Z","2021-02-17T23:01:04.294Z","2021-02-18T23:01:03.910Z","2021-02-19T23:01:03.953Z","2021-02-20T23:01:04.069Z","2021-02-21T23:03:56.262Z","2021-02-22T23:01:03.471Z","2021-02-23T23:01:03.962Z","2021-02-24T18:30:21.508Z","2021-02-25T00:01:06.156Z","2021-02-26T00:01:04.876Z","2021-02-27T00:01:04.396Z","2021-02-28T00:01:04.071Z","2021-03-01T00:03:56.742Z","2021-03-02T00:01:05.686Z","2021-03-03T00:01:07.232Z","2021-03-04T00:01:05.336Z","2021-03-05T00:01:03.702Z","2021-03-06T00:01:05.358Z","2021-03-07T00:01:03.483Z","2021-03-08T00:04:09.832Z","2021-03-09T00:01:03.422Z","2021-03-10T00:01:03.657Z","2021-03-11T08:40:45.845Z","2021-03-12T00:01:05.320Z","2021-03-13T10:21:40.328Z","2021-03-14T00:01:04.770Z","2021-03-15T00:04:39.567Z","2021-03-16T00:01:03.847Z","2021-03-17T00:01:09.507Z","2021-03-18T00:01:03.601Z","2021-03-19T00:01:04.699Z","2021-03-20T09:45:48.563Z","2021-03-21T00:01:04.840Z","2021-03-22T11:12:19.281Z","2021-03-23T00:01:05.461Z","2021-03-24T00:01:03.727Z","2021-03-25T00:01:03.928Z","2021-03-26T00:01:03.609Z","2021-03-27T00:01:03.563Z","2021-03-28T00:01:08.111Z","2021-03-29T00:04:31.110Z","2021-03-30T00:01:04.220Z","2021-03-31T00:01:03.631Z","2021-04-01T00:01:04.409Z","2021-04-02T00:01:43.662Z","2021-04-03T00:01:03.458Z","2021-04-04T00:01:04.337Z","2021-04-05T00:01:10.114Z","2021-04-06T00:01:03.789Z","2021-04-07T00:01:09.090Z","2021-04-08T00:01:10.001Z","2021-04-09T00:01:03.600Z","2021-04-10T00:01:04.613Z","2021-04-11T00:01:03.691Z","2021-04-12T00:01:03.335Z","2021-04-13T07:09:02.537Z","2021-04-14T00:01:03.797Z","2021-04-15T00:01:03.230Z","2021-04-16T10:53:07.662Z","2021-04-17T00:01:07.748Z","2021-04-18T00:01:03.633Z","2021-04-19T00:01:03.364Z","2021-04-20T07:08:52.048Z","2021-04-21T00:01:04.028Z","2021-04-22T00:01:11.279Z","2021-04-23T00:01:03.292Z","2021-04-24T00:01:03.511Z","2021-04-25T00:01:04.440Z","2021-04-26T00:01:05.404Z","2021-04-27T00:01:03.306Z","2021-04-28T00:01:03.816Z","2021-04-29T00:01:03.562Z","2021-04-30T00:01:03.646Z","2021-05-01T00:01:03.951Z","2021-05-02T00:01:03.760Z","2021-05-03T00:01:03.711Z","2021-05-04T00:01:03.887Z","2021-05-05T00:01:03.521Z","2021-05-06T00:01:03.610Z","2021-05-07T00:01:07.180Z","2021-05-08T22:34:08.606Z","2021-05-09T08:13:05.482Z","2021-05-10T00:01:04.203Z","2021-05-11T00:01:04.010Z","2021-05-12T00:01:03.966Z","2021-05-13T00:01:04.113Z","2021-05-14T00:01:04.225Z","2021-05-15T00:01:03.945Z","2021-05-16T00:01:04.035Z","2021-05-17T00:01:03.823Z","2021-05-18T00:01:04.134Z","2021-05-19T00:01:03.627Z","2021-05-20T00:01:03.815Z","2021-05-21T00:01:03.953Z","2021-05-22T00:01:03.900Z","2021-05-23T00:01:03.771Z","2021-05-24T00:01:03.956Z","2021-05-25T00:01:03.740Z","2021-05-26T00:01:03.791Z","2021-05-27T00:01:03.876Z","2021-05-28T00:01:03.863Z","2021-05-29T00:01:03.951Z","2021-05-30T00:01:03.783Z","2021-05-31T00:01:03.892Z","2021-06-01T07:09:33.575Z","2021-06-02T00:01:04.239Z","2021-06-03T00:01:03.619Z","2021-06-04T08:07:22.261Z","2021-06-05T00:17:43.261Z","2021-06-06T00:01:04.073Z","2021-06-07T15:11:14.292Z","2021-06-08T00:01:04.013Z","2021-06-09T00:01:03.886Z","2021-06-10T00:01:03.921Z","2021-06-11T00:01:03.944Z","2021-06-12T00:01:03.698Z","2021-06-13T00:01:03.656Z","2021-06-14T00:01:03.500Z","2021-06-15T00:01:04.192Z","2021-06-16T00:01:03.818Z","2021-06-17T00:01:03.841Z","2021-06-18T00:01:03.865Z","2021-06-19T00:01:03.700Z","2021-06-20T00:01:03.746Z","2021-06-21T00:01:03.623Z","2021-06-22T00:01:03.572Z","2021-06-23T00:01:03.862Z","2021-06-24T07:20:57.727Z","2021-06-25T00:01:03.739Z","2021-06-26T00:01:04.023Z","2021-06-27T00:01:03.584Z","2021-06-28T00:01:04.878Z","2021-06-29T00:01:03.871Z","2021-06-30T00:01:03.714Z","2021-07-01T00:01:03.624Z","2021-07-02T00:01:03.556Z","2021-07-03T00:01:04.107Z","2021-07-04T00:01:03.929Z","2021-07-05T00:01:03.720Z","2021-07-06T00:01:03.667Z","2021-07-07T20:04:10.006Z","2021-07-08T00:01:03.739Z","2021-07-09T00:01:04.259Z","2021-07-10T00:01:03.658Z","2021-07-11T00:01:04.082Z","2021-07-12T00:01:03.674Z","2021-07-13T00:01:03.718Z","2021-07-14T00:01:03.752Z","2021-07-15T00:01:03.868Z","2021-07-16T00:01:03.900Z","2021-07-17T00:01:04.005Z","2021-07-18T00:01:03.792Z","2021-07-19T00:01:03.546Z","2021-07-20T00:01:03.720Z","2021-07-21T00:01:03.663Z","2021-07-22T00:01:03.814Z","2021-07-23T00:01:03.635Z","2021-07-24T00:01:04.056Z","2021-07-25T00:01:04.066Z","2021-07-26T00:01:03.603Z","2021-07-27T00:01:03.515Z","2021-07-28T00:01:03.975Z","2021-07-29T00:01:03.464Z","2021-07-30T00:01:03.616Z","2021-07-31T00:01:04.089Z","2021-08-01T00:01:03.535Z","2021-08-02T13:18:58.163Z","2021-08-03T00:01:03.908Z","2021-08-04T00:01:04.018Z","2021-08-05T00:01:03.857Z","2021-08-06T00:01:03.884Z","2021-08-07T00:01:03.854Z","2021-08-08T00:01:03.952Z","2021-08-09T11:44:37.978Z","2021-08-10T00:02:14.883Z","2021-08-11T00:02:23.313Z","2021-08-12T00:02:18.748Z","2021-08-13T00:02:14.909Z","2021-08-14T00:02:14.795Z","2021-08-15T00:02:14.944Z","2021-08-16T00:02:15.280Z","2021-08-17T00:02:18.287Z","2021-08-18T00:02:20.059Z","2021-08-19T00:02:15.840Z","2021-08-20T00:02:17.741Z","2021-08-21T00:02:17.110Z","2021-08-22T00:02:15.763Z","2021-08-23T00:02:15.418Z","2021-08-24T00:02:16.486Z","2021-08-25T00:02:15.098Z","2021-08-26T00:02:19.458Z","2021-08-27T00:02:18.053Z","2021-08-28T00:02:18.384Z","2021-08-29T07:56:44.626Z","2021-08-30T00:03:15.453Z","2021-08-31T00:04:59.381Z","2021-09-01T00:03:15.536Z","2021-09-02T00:03:54.088Z","2021-09-03T00:03:15.275Z","2021-09-04T00:03:14.692Z","2021-09-05T21:51:05.584Z","2021-09-06T00:01:00.031Z","2021-09-07T00:01:00.044Z","2021-09-08T00:01:00.041Z","2021-09-09T00:01:00.058Z","2021-09-10T00:01:00.043Z","2021-09-11T00:01:00.027Z","2021-09-12T00:01:00.057Z","2021-09-13T00:01:00.037Z","2021-09-14T00:01:00.040Z","2021-09-15T00:01:00.042Z","2021-09-16T00:01:00.046Z","2021-09-17T00:01:00.031Z","2021-09-18T00:01:00.092Z","2021-09-19T00:01:00.040Z","2021-09-20T00:01:00.054Z"]';

x = JSON.parse(x)
x = x.map(d => new Date(d));

//let y =
//  "[100,94.16034982986835,111.08671973477009,107.65680595035397,115.41430127421519,111.86262713705749,113.57976061887217,108.71478158975579,112.17284911507026,100.17834609148265,87.26527326129485,88.97056955126772,98.19991970399218,99.57907424075398,110.2590783508671,121.86565374959547,130.29466182480832,126.612795988492,135.70737520563182,136.133135757571,108.94040034029472,116.53438751485417,120.59064448299162,125.12785018020614,139.49679521796432,136.88032898682968,120.84483682497361,128.07228425935523,128.23241595070687,127.92570896919523,124.58095353772207,130.65953319405637,129.04330429635468,140.6691629528254,147.00874392632903,157.91839376367642,152.32378359580952,149.94599153401177,165.99134505157662,185.91006372318682,204.0363847810316,252.75482119473378,219.4829997897761,221.1510896833695,210.12325847215055,189.25420884943588,193.48351328452935,204.69962621492314,222.62106926566327,210.0823171871232,221.18227100439788,236.80824792278463,206.99139881099234,169.51210878543455,178.99809819063265,174.96606551968466,160.00846951062553,159.80672212739404,177.79540992116475,164.46496074712908,185.6639120401181,211.61542578314337,216.17127681958638,215.78772509299728,215.56188655974094,256.6078245967363,285.98737639268643,284.21205647831687,284.1628230850919,257.112507413827,257.4349768407083,270.56211454787086,296.0307416230295,314.5094495744705,301.4237710734448,298.8925013019588,301.0611160550861,295.7048113720172,322.40915578794966,307.68216885374346,343.9443881937696,309.01720175436895,296.45552688630534,265.2961345949951,255.28495970461796,297.83245298872083,292.88612354094903,307.0681252784187,332.5708722213175,325.68021511080804,305.04305845979826,309.62920070464645,309.77901211804317,302.9951414721907,332.88178432865647,357.1594564964879,347.9369354414441,329.76112538107014,392.4526439368923,376.6106180792822,371.0011377910378,360.61459650206973,348.1973435610494,355.7668510297678,350.78620793275974,348.33927614840337,357.6975211702546,350.0869356134408,304.42342227255716,258.7599089316736,286.66538930665797,278.6529524310243,251.1047009868363,240.74693906270645,220.58109478910936,214.9200282195832,255.02928902418924,279.9363177895766,269.70758366480936,270.07486861073585,282.6055574258358,289.99740913959243,271.7902343902235,302.1682972206416,283.80199966563106,310.6748006465866,305.5969485814989,323.88071691053136,313.1739163515054,330.7572375758234,299.54106198718006,312.9134308258933,265.9339464515038,264.49762626418135,273.72255093290016,244.01238322811272,252.2918825437553,242.08081684178163,248.10211842202668,174.9887948337176]";
//let y = '[11995.845235416107,11236.583610814187,13267.44661864947,12843.80699843974,15481.484709056307,15131.776623222828,14749.618564292887,14488.65418857167,15967.67415237329,15163.025018399401,13242.723822557955,13534.393522783612,14896.06926143204,15114.97549397826,16562.98207965508,18421.860270255267,19853.82506505818,19801.788576650502,20607.06473698202,20828.78441649291,16748.012269449628,17116.920775217197,18222.235221067345,19371.95081334414,23192.843078126476,23506.180984439616,20735.2520530834,23003.94031003715,23032.702660071747,23019.78192646417,22090.869386232254,23158.4183134665,23162.7058585125,25260.79713734104,28016.05345044676,29899.87955425022,31318.333567264308,30927.479655263603,32930.434727037114,36817.93092471475,48963.18560228866,60461.080917540276,64119.398701155544,63965.94060296978,60948.093636762926,49053.167719725345,50149.36938971024,53429.846607362306,58359.67399715787,54255.092260358964,57244.43070477262,63343.30597315229,53257.4292356748,44538.0940652764,46845.974484375205,45790.74260463626,42057.92622089197,42978.07881225457,46066.43692778011,43056.11611143633,49046.48454600279,55700.44833961684,56899.61869479897,52582.240039539836,53553.70259426837,63089.73965827208,70706.15891742849,70140.50964608905,70140.50964608905,64725.57320903904,65320.40859500071,71702.15837134613,73820.29637069954,84578.38746788035,80466.043248566,79801.03462667702,80440.48419442847,74847.8948739945,81708.95190411068,77966.55716041094,87622.74552759978,77034.36931721827,73902.89088968906,66387.342663619,63882.15992159564,74529.18657519491,72650.29951867739,75495.1632106999,81929.27162048564,80678.44304612708,76300.54303587212,77551.37161023068,77551.37161023068,73798.88588715499,80053.0287589478,85981.47972759239,84098.67360217066,79705.45930951995,96023.1123965083,92257.50014566483,92885.10218747208,90406.61262879698,86639.67043593043,88523.1415323637,87267.49413474153,86748.27962453543,88634.1117902862,86748.27962453543,75433.28663003081,64118.29363552619,71033.01157661233,69147.17941086159,61893.70315173439,59340.66356574099,55263.77564921204,54255.12935603016,64224.24303348694,70442.87485508216,67927.05789597209,68558.0829766398,71187.23001352003,73034.53364882384,68627.27730794654,76182.57389230763,99588.63893518949,108983.7935517168,107332.1372726472,113986.63525578317,110218.48202418703,114830.80737081464,104462.76731095936,109126.28370877003,92647.93505776189,92147.5397482768,95429.59297367792,85071.55268220554,85875.31428741889,80665.01328434743,82466.13754563117,58033.054611401836,61571.26500783802,50663.27492538509,45322.08296969796,38425.79182824802,47389.954139687725,45645.12702625697,55132.3751001067,51711.62588074262,46602.284556910185,41826.753461751694,42724.965139611835,48349.9858168049,46846.85644372842,50233.42632029027,47538.966970234025,49844.605378701446,47668.5543816805,51338.97019388484,44769.40027553592,44147.730043672615,46030.65469461563,42531.462082308666,38711.53978052484,37757.975740828195,40628.706408863385,43509.65958533798,42988.11444991493,44019.04704540001,44153.70073786645,40241.38500884496,39631.47326487798,39971.26692789379,32335.170262123767,30168.27777866628,33130.88893568593,35483.8153751401,32730.68184149246,33096.05409149009,36962.236707603566,38644.39324341604]';
let y = '[100,94.16034982986835,111.08671973477009,107.65680595035397,115.41430127421519,111.86262713705749,113.57976061887217,108.71478158975579,112.17284911507026,100.17834609148265,87.26527326129485,88.97056955126772,98.19991970399218,99.57907424075398,110.2590783508671,121.86565374959547,130.29466182480832,126.612795988492,135.70737520563182,136.133135757571,108.94040034029472,116.53438751485417,120.59064448299162,125.12785018020614,139.49679521796432,136.88032898682968,120.84483682497361,128.07228425935523,128.23241595070687,127.92570896919523,124.58095353772207,130.65953319405637,129.04330429635468,140.6691629528254,147.00874392632903,157.91839376367642,152.32378359580952,149.94599153401177,165.99134505157662,185.91006372318682,204.0363847810316,252.75482119473378,219.4829997897761,221.1510896833695,210.12325847215055,189.25420884943588,193.48351328452935,204.69962621492314,222.62106926566327,210.0823171871232,221.18227100439788,236.80824792278463,206.99139881099234,169.51210878543455,178.99809819063265,174.96606551968466,160.00846951062553,159.80672212739404,177.79540992116475,164.46496074712908,185.6639120401181,211.61542578314337,216.17127681958638,215.78772509299728,215.56188655974094,256.6078245967363,285.98737639268643,284.21205647831687,284.1628230850919,257.112507413827,257.4349768407083,270.56211454787086,296.0307416230295,314.5094495744705,301.4237710734448,298.8925013019588,301.0611160550861,295.7048113720172,322.40915578794966,307.68216885374346,343.9443881937696,309.01720175436895,296.45552688630534,265.2961345949951,255.28495970461796,297.83245298872083,292.88612354094903,307.0681252784187,332.5708722213175,325.68021511080804,305.04305845979826,309.62920070464645,309.77901211804317,302.9951414721907,332.88178432865647,357.1594564964879,347.9369354414441,329.76112538107014,392.4526439368923,376.6106180792822,371.0011377910378,360.61459650206973,348.1973435610494,355.7668510297678,350.78620793275974,348.33927614840337,357.6975211702546,350.0869356134408,304.42342227255716,258.7599089316736,286.66538930665797,278.6529524310243,251.1047009868363,240.74693906270645,220.58109478910936,214.9200282195832,255.02928902418924,279.9363177895766,269.70758366480936,270.07486861073585,282.6055574258358,289.99740913959243,271.7902343902235,302.1682972206416,283.80199966563106,310.6748006465866,305.5969485814989,323.88071691053136,313.1739163515054,330.7572375758234,299.54106198718006,312.9134308258933,265.9339464515038,264.49762626418135,273.72255093290016,244.01238322811272,252.2918825437553,242.08081684178163,248.10211842202668,174.9887948337176,185.94196950090625,153.4602663924383,137.29902724890587,116.40735583169884,146.08189824180332,139.99530486659327,168.85366754802092,158.37695490136167,141.3107031365017,126.8339001098178,129.45586164105816,146.22384690234728,141.4630127473217,151.64948886940329,143.86608669497568,151.1610850722531,142.8550798787671,154.21764419715322,134.76959553317775,132.11165688135955,137.7298702037446,127.01964243736063,115.0554031390172,111.80468444998012,119.45209973582115,126.87880865520937,125.7908406699554,129.383815036289,146.13427336428302,133.08764988384627,130.0856781211129,131.20101109849782,104.50064274193234,97.58775007714739,106.60918388835127,114.1804738693256,105.07223820401967,106.24515847102802,110.109146547086,115.06862325162105,122.30927896414323,125.7509171943603,120.02969124016066,119.98201255819458,122.25071468490455,126.90382892271693,121.25309053145975,140.51117744482926,134.6843846136222,120.88337515996105,122.89262744661006,120.26876331506001,124.72634235364296,119.84390758698824,117.79072401697762,116.60346846439325,112.1280364587108,106.27273047999563,107.71600641210507,108.18119860383746,101.9143745299907,97.93426916586152,105.93749904719681,106.85090571601539,110.9843501336112,115.69221811147887,118.34655141665588,123.15756329766734,126.87070105127374,128.20650135084122,131.41397179079533,136.19226947629133,144.44616239881412,153.0225217746614,153.5449734964005,154.63889697513088,174.28082667010457,172.5575096267379,171.88983985678874,176.91785323316998,164.83924363627102,162.71960960625202,169.33790434181236,178.15693191384844,166.87692845393926,179.7847867057306,186.30417346332231,191.96209904819202,189.54334330996608,186.52202040924573,198.80862098962783,212.00235337769305,244.26202398432758,251.15024577253877,251.0377811310758,247.55242237365366,224.57100728479747,235.6180917001399,215.88679735475316,223.95403565560207,223.5936701748949,224.4379618354821,213.7558838286495,226.41350229675768,239.82241027878095,235.61430261055762,233.91652511982144,251.35823911487194,253.66684486081414,251.3051430506647,198.82120842594438,196.8660275046914,198.7450635051472,187.5660683592749,191.21748523602497,222.91701014747258,195.59319614217955,208.26787061905324,219.05837800794203,215.33447088648182,205.80999479147718,207.97461048587178,168.79350165843906]';

y = JSON.parse(y)

http
  .createServer((req, res) => {
    const chart = plot(html)(
      { x, y },
      {
        margin: 25,
        width: 70,
        height: 20,
        title: "A line chart",
        polygon: {
          fill: "none",
          style: "fill:url(#polygrad);",
          strokeWidth: 0.01,
          stroke: "white"
        },
        line: {
          fill: "none",
          strokeWidth: 0.1,
          stroke: "black"
        },
        polygonGradient: {
          offSet1: "0%",
          stopColor1: "#ffffff00",
          offSet2: "100%",
          stopColor2: "#ffffff00"
        },
        xAxis: {
          strokeWidth: 0.1,
          stroke: "black"
        },
        yAxis: {
          strokeWidth: 0.1,
          stroke: "black"
        },
        xLabel: {
          strokeWidth: 0.05,
          stroke: "lightgrey",
          fontSize: 1.5
        },
        yLabel: {
          strokeWidth: 0.05,
          stroke: "lightgrey",
          fontSize: 1.5,
          name: "PRICE (EUR)"
        },
        yNumLabels: 10
      }
    );
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(chart);
  })
  .listen(5000);
