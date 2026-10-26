#!/usr/bin/env node
import * as cdk from "aws-cdk-lib/core";
// import { StaticSiteStack } from "../lib/cdk-stack";
import { EcsStack, EcrStack } from "../lib/ecs-stack";

const app = new cdk.App();
// new StaticSiteStack(app, "StaticSiteStack", {
//     env: { account: "663001881857", region: "us-east-1" },
// });

const ecrStack = new EcrStack(app, "EcrStack", {
    env: { account: "663001881857", region: "us-east-1" },
});

new EcsStack(app, "EcsStack", {
    env: { account: "663001881857", region: "us-east-1" },
    repository: ecrStack.repository,
    certificateArn: app.node.tryGetContext("certificateArn"),
});
