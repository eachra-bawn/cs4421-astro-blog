#!/usr/bin/env node
import * as cdk from "aws-cdk-lib/core";
import { StaticSiteStack } from "../lib/cdk-stack";
import { EcrStack } from "../lib/ecs-stack";

const app = new cdk.App();
new StaticSiteStack(app, "StaticSiteStack", {
    env: { account: "663001881857", region: "us-east-1" },
});

new EcrStack(app, "EcrStack", {
    env: { account: "663001881857", region: "us-east-1" },
});
